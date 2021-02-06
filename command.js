var canvas = document.getElementById("canvas");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
var ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(200,0,0)";
// ctx.strokeStyle = 'none';

let drawDots = false;

canvas.onmousedown = () => {
  drawDots = true;
};

canvas.onmouseup = () => {
  drawDots = false;
};

canvas.onmousemove = (e) => {
  if (drawDots) {
    var x = e.clientX;
    var y = e.clientY;
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    // ctx.stroke();
    ctx.fill();
  }
};

// ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
// ctx.fillRect(30, 30, 55, 50);

// var canvas_div = document.getElementById('canvas');
// // canvas_div.onclick = (e) => {
// canvas_div.onmousemove = (e) => {
//     var x = e.clientX;
//     var y = e.clientY;
//     let div_to_create = document.createElement('div');
//     div_to_create.style.position = 'absolute';
//     div_to_create.style.left = x + 'px';
//     div_to_create.style.top = y + 'px';
//     div_to_create.style.backgroundColor = 'blue';
//     // div_to_create.style.border = '1px solid green';
//     div_to_create.style.width = '5px';
//     div_to_create.style.height = '5px';
//     div_to_create.style.marginLeft = '-3px';
//     div_to_create.style.marginTop = '-3px';
//     div_to_create.style.borderRadius = '50%';
//     canvas_div.appendChild(div_to_create);
// }
