type Context = {
  req: string;
  res: any;
};

type Middleware = (ctx: Context, next: Function) => void;

// composeMiddlewares 的作用
// 就是把 composeMiddlewares([f1, f2, f3, ..., fn]) 转化为 f1(ctx, f2(ctx, f3(...fn))))。
function composeMiddlewares(middlewares: Middleware[]) {
  return function wrapMiddlewares(ctx: Context) {
    // 记录当前运行的 middleware 的下标
    let index = -1;
    function dispatch(i: number) {
      index = i;
      const fn = middlewares[i];
      // 最后一个中间件调用 next 也不会报错
      if (!fn) {
        return Promise.resolve();
      }
      // 这里之所以需要包裹一层 Promise.resolve()
      // 是为了避免用户传入的中间件没有加 async
      return Promise.resolve(
        // 第一个参数继续把 ctx 传递下去
        // 第二个参数实现使用 next 方法进入下一个中间件
        fn(ctx, () => dispatch(i + 1))
        // 也可以写成
        // fn(ctx, dispatch.bind(null, i + 1))
      );
    }
    // 开始运行第一个中间件
    return dispatch(0);
  };
}

class MyKoa2 {
  // 声明类的属性
  middlewares: Middleware[];
  constructor() {
    this.middlewares = [];
  }

  use(middleware: Middleware) {
    this.middlewares.push(middleware);
    // 实现链式调用 use
    return this;
  }

  start({ req }: { req: string }) {
    // 组合中间件
    const composed = composeMiddlewares(this.middlewares);

    const ctx = { req, res: undefined };
    return composed(ctx);
  }
}

// 测试代码

const app = new MyKoa2();

// 最外层，控制全局错误
app.use(async (ctx, next) => {
  try {
    // 这里的 next 包含了第二层、第三层、及后面所有的运行
    await next();
  } catch (e: any) {
    console.log(`[koa error]: ${e.message}`);
  }
});

// 第二层，日志中间层
app
  .use(async (ctx, next) => {
    const { req } = ctx;
    console.log(`logger1: req is ${JSON.stringify(req)}`);
    await next();
    // next 后可以拿到第三层写进 ctx 的数据
    console.log(`logger1: res is ${JSON.stringify(ctx.res)}`);
  })
  .use(async (ctx, next) => {
    const { req } = ctx;
    console.log(`logger2: req is ${JSON.stringify(req)}`);
    await next();
    // next 后可以拿到第三层写进 ctx 的数据
    console.log(`logger2: res is ${JSON.stringify(ctx.res)}`);
  });

// 第三层，核心服务中间件
// 在真实场景中，这一层一般用来构造真正需要返回的数据，写入 ctx 中
app.use(async (ctx, next) => {
  const { req } = ctx;
  console.log(`calculating the res of ${req}...`);
  const res = {
    code: 200,
    result: `req ${req} success.`,
  };
  ctx.res = res;
  await next();
});

// 用来测试全局错误中间件
// 注释掉这一个中间件，服务才能正常运行
// app.use(async (ctx, next)=>{
//   throw new Error("test Error!");
// })

app.start({ req: "sheben" });
