const string = `
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  }
#html{
  background:#07beea;
  display:flex;
}
.doraemon{
  position:relative;
  margin:50px;
  margin-left:50%;
  transform:translateX(-50%);
}
.headLight{
  width:50px;
  height:50px;
  transform: rotate(20deg);
  box-shadow:80px 20px 50px #fff;
  border-radius:45px;
  position:absolute;
  top:-20px;
  left:170px;
  opacity:0.5
}
.face{
  position:relative;
  width:310px;
  height:300px;
  border-radius:146px;
  background:#07beea;
  background: -webkit-gradient(linear, right top, left bottom, from(#fff) ,color-stop(0.20, #07beea), color-stop(0.73, #10a6ce),color-stop(0.95, #000), to(#444));
  border:#333 2px solid;
  top:-15px;
  box-shadow:-5px 10px 15px rgba(0,0,0,0.45);
}
.base{
  position:relative;
  top:-5px;
}
.baseWhite{
  position:absolute;
  border:#000 2px solid;
  width:264px;
  height:196px;
  border-radius: 150px 150px;
  background:#FFF;
  background: -webkit-gradient(linear, right top, left bottom, from(#fff),color-stop(0.75,#fff),color-stop(0.83,#eee),color-stop(0.90,#999),color-stop(0.95,#444), to(#000));
  z-index:1;
  top:85px;
  left:22px;
}
.eyes{
  position:relative;
  top:-5px;
}
div.eye{
  position:absolute;
  border-radius: 35px 35px;
  border:2px solid #000;
  width:72px;
  height:83px;
  z-index:20;
  background:#fff;
}
div.blackEye{
  position:absolute;
  width:15px;
  height:15px;
  border-radius:10px;
  background:#333;
  z-index:21;
  animation: cate 5s linear infinite;
}
@-webkit-keyframes cate{
  0%{margin:0 0 0 0;}
  80%{margin:0px 0 0 0;}
  85%{margin:-20px 0 0 0;}
  90%{margin:0 0 0 0;}
  93%{margin:0 0 0 7px;}
  96%{margin:0 0 0 0;}
  100%{margin:0 0 0 0;}
}
div.blackLeft{
  top:100px;
  left:130px;
}
div.blackRight{
  top:100px;
  left:170px;
}
div.eyeLeft{
  top:45px;
  left:82px;
}
div.eyeRight{
  top:45px;
  left:156px;
}
.nose{
  width:32px;
  height:32px;
  border:2px solid #000;
  border-radius:50px;
  background:#c93e00;
  position:absolute;
  top:117px;
  left:139px;
  z-index:30;
}
.noseLight{
  width:10px;
  height:10px;
  border-radius:5px;
  box-shadow:19px 8px 5px #fff;
  position:relative;
  top:0px;
  left:0px;
}
.noseLine{
  background:#333;
  width:3px;
  height:100px;
  top:140px;
  left:155px;
  position:absolute;
  z-index:20;
}
.mouth{
  width:240px;
  height:500px;
  border-bottom:3px solid #333;
  border-radius:120px;
  position:absolute;
  top:-263px;
  left:36px;
  z-index:10;
}
.whiskers{
  background:#333;
  height:2px;
  width:60px;
  position:absolute;
  z-index:20;
}
.whi_right{top:165px;left:210px;}
.whi_right_top{top:145px;left:210px;}
.whi_right_bottom{top:185px;left:210px;}
.whi_left{top:165px;left:50px;}
.whi_left_top{top:145px;left:50px;}
.whi_left_bottom{top:185px;left:50px;}
.rotate20{transform: rotate(20deg);}
.rotate160{transform: rotate(160deg);}
`;
export default string;
