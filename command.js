var canvas = document.getElementById("canvas");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
var ctx = canvas.getContext("2d");

// initialize the default line style
ctx.fillStyle = "rgb(200,0,0)";
ctx.lineWidth = 2;
ctx.lineCap = "round";

// is this a touch device?
let isTouchDevice = "ontouchstart" in document.documentElement;

// is the time to draw the line?
let drawDots = false;

// to see in which device so that to use different method
// if the user draw the line on their smartphone
if (isTouchDevice) {
  canvas.ontouchstart = (e) => {
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  };

  canvas.ontouchmove = (e) => {
    var x = e.touches[0].clientX;
    var y = e.touches[0].clientY;
    ctx.lineTo(x, y);
    ctx.stroke();
  };
// if the user draw the line on PC
} else {
  canvas.onmousedown = (e) => {
    drawDots = true;
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  };

  canvas.onmouseup = () => {
    drawDots = false;
  };

  canvas.onmousemove = (e) => {
    if (drawDots) {
      var x = e.clientX;
      var y = e.clientY;
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  };
}
