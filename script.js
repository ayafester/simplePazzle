let cvs = document.getElementById("canvas");//настройка канваса
let ctx = cvs.getContext("2d");

let img1 = new Image();
let img2 = new Image();
let img3 = new Image();
let img4 = new Image();
let img5 = new Image();

img1.src = "img/1.jpg"; //путь к изображениям
img2.src = "img/2.jpg";
img3.src = "img/3.jpg";
img4.src = "img/4.jpg";
img5.src = "img/5.jpg";

ctx.beginPath(); //заливка фона
ctx.rect(60, 10, 1200, 600);
ctx.fillStyle = "#FFFAC8";
ctx.fill();

let x = 60;
let y = 20;

function draw() { //начальное положение картинок
  for(let i=0; i<20; i++) {
    x += 20;
    y += 20;
    //ctx.drawImage(img1, x+i, y+i, 100, 180);
  }
  //ctx.drawImage(img1, x, y, 100, 180);
  ctx.drawImage(img2, 400, 400, 100, 180);
  ctx.drawImage(img3, 1000, 20, 100, 180);
  ctx.drawImage(img4, 1100, 420, 100, 180);
  ctx.drawImage(img5, 520, 300, 100, 180);
}


img5.onload = draw;
