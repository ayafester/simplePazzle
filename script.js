let cvs = document.getElementById("canvas1");//настройка канваса
let ctx = cvs.getContext("2d");

let img1 = new Image();

img1.src = "img/1.jpg";

let part_img1 = new Image(); //части изображений
let part_img2 = new Image();
let part_img3 = new Image();
let part_img4 = new Image();
let part_img5 = new Image();
let part_img6 = new Image();
let part_img7 = new Image();
let part_img8 = new Image();
let part_img9 = new Image();
let part_img10 = new Image();
let part_img11 = new Image();

part_img1.src = "img/image_part_001.jpg"; //путь к изо
part_img2.src = "img/image_part_002.jpg";
part_img3.src = "img/image_part_003.jpg";
part_img4.src = "img/image_part_004.jpg";
part_img5.src = "img/image_part_005.jpg";
part_img6.src = "img/image_part_006.jpg";
part_img7.src = "img/image_part_007.jpg";
part_img8.src = "img/image_part_008.jpg";
part_img9.src = "img/image_part_009.jpg";
part_img10.src = "img/image_part_010.jpg";
part_img11.src = "img/image_part_011.jpg";


function draw() {
  ctx.drawImage(img1, 0, 0);
}

img1.onload = draw;

document.addEventListener("click", putUp);

function putUp() {
  //alert("Начинайте собирать!");
  ctx.beginPath(); //заливка фона новый квадрат
  ctx.rect(0, 0, 1000, 600);
  ctx.fillStyle = "#FFFAC8";
  ctx.fill();

  ctx.drawImage(part_img11, 0, 0);//написать рандом
  ctx.drawImage(part_img5, 250, 0);
  ctx.drawImage(part_img2, 500, 0);
  ctx.drawImage(part_img8, 750, 0);
  ctx.drawImage(part_img1, 0, 200);
  ctx.drawImage(part_img9, 250, 200);
  ctx.drawImage(part_img6, 500, 200);
  ctx.drawImage(part_img3, 750, 200);
  ctx.drawImage(part_img10, 0, 400);
  ctx.drawImage(part_img3, 250, 400);
  ctx.drawImage(part_img7, 500, 400);
}
