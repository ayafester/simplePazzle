/*
*/
let cvs = document.getElementById("canvas1"),//настройка канваса
    ctx = cvs.getContext("2d");

function setGrid() { //прорисовка линий

    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";

    let line = 0 ;
    for(let i = 0; i<5; i++) {
      ctx.moveTo(line, 0);
      ctx.lineTo(line, cvs.height);
      ctx.stroke();
      line += 250;
    }

    let line2 = 0 ;
    for(let i = 0; i<5; i++) {
      ctx.moveTo(0, line2);
      ctx.lineTo(cvs.width, line2);
      ctx.stroke();
      line2 += 200;
    }
}
let img1 = new Image();//главное изображение
img1.src = "img/1.jpg";

let part_img1 = new Image(), //части изображений
    part_img2 = new Image(),
    part_img3 = new Image(),
    part_img4 = new Image(),
    part_img5 = new Image(),
    part_img6 = new Image(),
    part_img7 = new Image(),
    part_img8 = new Image(),
    part_img9 = new Image(),
    part_img10 = new Image(),
    part_img11 = new Image();

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


function draw() { //начальное изображение картинки
  ctx.drawImage(img1, 0, 0);
}

img1.onload = draw; //при прогрузки картинки функция

function generateArrayRandomNumber (min, max) { //генератор случайных чисел неповторяющихся
	let totalNumbers 		= max - min + 1,
		arrayTotalNumbers 	= [],
		arrayRandomNumbers 	= [],
		tempRandomNumber;

	while (totalNumbers--) {
		arrayTotalNumbers.push(totalNumbers + min);
	}

	while (arrayTotalNumbers.length) {
		tempRandomNumber = Math.round(Math.random() * (arrayTotalNumbers.length - 1));
		arrayRandomNumbers.push(arrayTotalNumbers[tempRandomNumber]);
		arrayTotalNumbers.splice(tempRandomNumber, 1);
	}

	return arrayRandomNumbers;
}
let arrNum = generateArrayRandomNumber(1, 11); //фиксирванные числа от 1 до 11


document.getElementById("start").onclick = putUp; //при клике картинки расстасовываются

function putUp() {

  ctx.clearRect(0, 0, cvs.width, cvs.height); //очистила от старой фотки
  setGrid(); //загрузила сетку

  document.getElementById("h1").innerText = "Пора собирать пазл! Нажимайте на картинку для перемещения в свободное место";


  ctx.drawImage(eval(`part_img${arrNum[0]}`), 0, 0);//рандомное расположение изображений
  ctx.drawImage(eval(`part_img${arrNum[1]}`), 250, 0);
  ctx.drawImage(eval(`part_img${arrNum[2]}`), 500, 0);
  ctx.drawImage(eval(`part_img${arrNum[3]}`), 750, 0);
  ctx.drawImage(eval(`part_img${arrNum[4]}`), 0, 200);
  ctx.drawImage(eval(`part_img${arrNum[5]}`), 250, 200);
  ctx.drawImage(eval(`part_img${arrNum[6]}`), 500, 200);
  ctx.drawImage(eval(`part_img${arrNum[7]}`), 750, 200);
  ctx.drawImage(eval(`part_img${arrNum[8]}`), 0, 400);
  ctx.drawImage(eval(`part_img${arrNum[9]}`), 250, 400);
  ctx.drawImage(eval(`part_img${arrNum[10]}`), 500, 400);

  setPic(); //объявление переменных с картинками*/
}

function setPic() { //массив картинок и их айди, ссортированы слева направо. для конечного результата
  let pics = []
  for ( let i = 0; i < 11; i++) {
    let m = {};
    pics.push(m);
  }
  for ( let i = 0; i < 11; i++) {
    pics[i].pic = eval(`part_img${arrNum[i]}`);
    pics[i].id = i;
  }
  return pics;
}

let emptyRect = { //начальное положение пустого квадрата
  x: 750,
  y: 400,
  width: 250,
  height: 200
}

document.addEventListener("keydown", moveTo);

function moveTo() {
    ctx.clearRect(emptyRect.x - 250, emptyRect.y, emptyRect.width, emptyRect.height);
    ctx.drawImage(eval(`part_img${arrNum[10]}`),emptyRect.x, emptyRect.y);
    empty.x -= 250;
}
