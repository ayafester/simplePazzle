let cvs = document.getElementById("canvas1"),//настройка канваса
    ctx = cvs.getContext("2d"),
    cvsLeft = cvs.offsetLeft, //начало координаты канваса относительно ДОМ
    cvsTop = cvs.offsetTop,
    elements = [];

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

    elements.push({
        colour: '#FFFAC8',
        width: 250,
        height: 200,
        top: 0,
        left: 0,
        id: 1
    });

    elements.push({
        colour: '#FFFAC8',
        width: 250,
        height: 200,
        top: 0,
        left: 250,
        id: 2
    });
    elements.push({
        colour: '#FFFAC8',
        width: 250,
        height: 200,
        top: 0,
        left: 500,
        id: 3
    });
    elements.push({
        colour: '#FFFAC8',
        width: 250,
        height: 200,
        top: 0,
        left: 750,
        id: 4
    });
    elements.push({
        colour: '#FFFAC8',
        width: 250,
        height: 200,
        top: 200,
        left: 0,
        id: 5
    });
    elements.push({
        colour: '#FFFAC8',
        width: 250,
        height: 200,
        top: 200,
        left: 250,
        id: 6
    });
    elements.push({
        colour: '#FFFAC8',
        width: 250,
        height: 200,
        top: 200,
        left: 500,
        id: 7
    });
    elements.push({
        colour: '#FFFAC8',
        width: 250,
        height: 200,
        top: 200,
        left: 750,
        id: 8
    });
    elements.push({
        colour: '#FFFAC8',
        width: 250,
        height: 200,
        top: 400,
        left: 0,
        id: 9
    });
    elements.push({
        colour: '#FFFAC8',
        width: 250,
        height: 200,
        top: 400,
        left: 250,
        id: 10
    });
    elements.push({
        colour: '#FFFAC8',
        width: 250,
        height: 200,
        top: 400,
        left: 500,
        id: 11
    });
    elements.push({
        colour: '#FFFAC8',
        width: 250,
        height: 200,
        top: 400,
        left: 750,
        id: 12
    });

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

function drawRectanlges_img() {

  ctx.clearRect(0, 0, 1000, 800);//очищаем канву от
  elements.forEach(function(element) {//много прямоугольников
    ctx.fillStyle = element.colour;
    ctx.fillRect(element.left, element.top, element.width, element.height);
  });

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
  }

cvs.addEventListener('click', click, false);

let emptyRect = { //начальное положение пустого квадрата
  x: 750,
  y: 400,
  width: 250,
  height: 200
}

/*function clickUp(event) {
    let x = event.pageX - cvsLeft,
        y = event.pageY - cvsTop;
    elements.forEach(function(element) {
        if (y > element.top && y < element.top + element.height && x > element.left && x < element.left + element.width) {
            alert(`rectangles ${element.id}`);
            console.log(1);
        }
    });
}*/
function click(event) {
  let x = event.pageX - cvsLeft,
      y = event.pageY - cvsTop;
      if (y > elements[0].top && y < elements[0].top + elements[0].height && x > elements[0].left && x < elements[0].left + elements[0].width) {
          alert(`rectangles ${elements[0].id}`);
          console.log(1);
      };
}
