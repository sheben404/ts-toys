const $: ParentNode["querySelector"] = (s: any) => document.querySelector(s);
const $$: ParentNode["querySelectorAll"] = (s: any) =>
  document.querySelectorAll(s);

const inputElement: HTMLSpanElement | null = $(".input");
const keyboardElement: HTMLDivElement | null = $(".keyboard");

if (inputElement != null && keyboardElement != null) {
  inputElement.onclick = function (e) {
    if (!(this as HTMLSpanElement).classList.contains("focus")) {
      (this as HTMLSpanElement).classList.add("focus");
    }
    keyboardElement && keyboardElement.classList.add("show");
    e.stopPropagation();
  };

  keyboardElement.onclick = function (e) {
    e.stopPropagation();
  };

  document.onclick = function (e) {
    keyboardElement && keyboardElement.classList.remove("show");
    inputElement && inputElement.classList.remove("focus");
  };

  let text = "";

  const keyArr: NodeListOf<HTMLElement> = $$(".keyboard .row > span");

  keyArr.forEach((key) => {
    key.onmousedown = function () {
      (this as HTMLElement).classList.add("active");
    };
    key.onmouseup = function () {
      (this as HTMLElement).classList.remove("active");
    };
  });

  keyArr.forEach((key) => {
    key.onclick = function (e) {
      let type = key.dataset.type;
      switch (type) {
        case "char":
          text += key.innerText;
          inputElement.innerText = text;
          break;
        case "uppercase":
          setPage('uppercase')
          break;
        case "lowercase":
          setPage('lowercase')
          break;
        case "number":
          setPage('number')
          break;
        case "symbol":
          setPage('symbol')
          break; 
        case "backspace":
          text = text.substr(0, text.length - 1)
          inputElement.innerText = text;
          break;
        case "space":
          text += ' '
          inputElement.innerText = text;
          break;
        case "return":
          text += '\n'
          inputElement.innerText = text;
          break;
      }
    };
  });  
}
function setPage(name: string){
  const keyboardPages:NodeListOf<HTMLElement> = $$('.keyboard .page')
  keyboardPages.forEach(page => page.style.display = 'none');
  ($('.keyboard .page-' + name) as HTMLElement).style.display = 'block'
}
