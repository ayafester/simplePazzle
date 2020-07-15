let cvs = document.getElementById("canvas1"),//настройка канваса
    ctx = cvs.getContext("2d"),
    cvsLeft = cvs.offsetLeft, //начало координаты канваса относительно ДОМ
    cvsTop = cvs.offsetTop,
    elements = [];
    cvs2 = document.getElementById("canvas"),
    ctx2 = cvs2.getContext("2d");


let img1 = new Image();//главное изображение
img1.src = "img/1.png";



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
console.log(arrNum)

function draw() { //начальное изображение картинки
  ctx2.drawImage(img1, 0, 0, 300, 180);
  ctx.drawImage(img1, 0, 0);
}

img1.onload = draw; //при прогрузки картинки функция

    elements.push({
        colour: '#FFFAC8',
        width: 250,
        height: 200,
        top: 0,
        left: 0,
        id: 0,
        flag: true,
        img: eval(`part_img${arrNum[0]}`)
    });

    elements.push({
        colour: '#FFFAC8',
        width: 250,
        height: 200,
        top: 0,
        left: 250,
        id: 1,
        flag: true,
        img: eval(`part_img${arrNum[1]}`)
    });
    elements.push({
        colour: '#FFFAC8',
        width: 250,
        height: 200,
        top: 0,
        left: 500,
        id: 2,
        flag: true,
        img: eval(`part_img${arrNum[2]}`)
    });
    elements.push({
        colour: '#FFFAC8',
        width: 250,
        height: 200,
        top: 0,
        left: 750,
        id: 3,
        flag: true,
        img: eval(`part_img${arrNum[3]}`)
    });
    elements.push({
        colour: '#FFFAC8',
        width: 250,
        height: 200,
        top: 200,
        left: 0,
        id: 4,
        flag: true,
        img: eval(`part_img${arrNum[4]}`)
    });
    elements.push({
        colour: '#FFFAC8',
        width: 250,
        height: 200,
        top: 200,
        left: 250,
        id: 5,
        flag: true,
        img: eval(`part_img${arrNum[5]}`)
    });
    elements.push({
        colour: '#FFFAC8',
        width: 250,
        height: 200,
        top: 200,
        left: 500,
        id: 6,
        flag: true,
        img: eval(`part_img${arrNum[6]}`)
    });
    elements.push({
        colour: '#FFFAC8',
        width: 250,
        height: 200,
        top: 200,
        left: 750,
        id: 7,
        flag: true,
        img: eval(`part_img${arrNum[7]}`)
    });
    elements.push({
        colour: '#FFFAC8',
        width: 250,
        height: 200,
        top: 400,
        left: 0,
        id: 8,
        flag: true,
        img: eval(`part_img${arrNum[8]}`)
    });
    elements.push({
        colour: '#FFFAC8',
        width: 250,
        height: 200,
        top: 400,
        left: 250,
        id: 9,
        flag: true,
        img: eval(`part_img${arrNum[9]}`)
    });
    elements.push({
        colour: '#FFFAC8',
        width: 250,
        height: 200,
        top: 400,
        left: 500,
        id: 10,
        flag: true,
        img: eval(`part_img${arrNum[10]}`)
    });
    elements.push({
        colour: '#FFFAC8',
        width: 250,
        height: 200,
        top: 400,
        left: 750,
        id: 11,
        flag: false,
        img: 1
    });


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

cvs.addEventListener('click', click0, false);
cvs.addEventListener('click', click1, false);
cvs.addEventListener('click', click2, false);
cvs.addEventListener('click', click3, false);
cvs.addEventListener('click', click4, false);
cvs.addEventListener('click', click5, false);
cvs.addEventListener('click', click6, false);
cvs.addEventListener('click', click7, false);
cvs.addEventListener('click', click8, false);
cvs.addEventListener('click', click9, false);
cvs.addEventListener('click', click10, false);
cvs.addEventListener('click', click11, false);

function click0(event) { //00 квадрат
  let x = event.pageX - cvsLeft,
      y = event.pageY - cvsTop;
  if (y > elements[0].top && y < elements[0].top + elements[0].height && x > elements[0].left && x < elements[0].left + elements[0].width) {
      //alert(`rectangles ${elements[00].id}`);
      if (elements[1].flag == false) {
        ctx.clearRect(elements[0].left, elements[0].top, elements[0].width, elements[0].height);
        ctx.drawImage(elements[0].img, elements[1].left, elements[1].top);
        elements[1].img = elements[0].img;
        elements[0].flag = false;
        elements[1].flag = true;
      }
      if (elements[4].flag == false) {
        ctx.clearRect(elements[0].left, elements[0].top, elements[0].width, elements[0].height);
        ctx.drawImage(elements[0].img,elements[4].left, elements[4].top);
        elements[4].img = elements[0].img;
        elements[0].flag = false;
        elements[4].flag = true;
      }
  }
}
function click1(event) { //11 квадрат
  let x = event.pageX - cvsLeft,
      y = event.pageY - cvsTop;
  if (y > elements[1].top && y < elements[1].top + elements[1].height && x > elements[1].left && x < elements[1].left + elements[1].width) {
      //alert(`rectangles ${elements[10].id}`);
      if (elements[2].flag == false) {
        ctx.clearRect(elements[1].left, elements[1].top, elements[1].width, elements[1].height);
        ctx.drawImage(elements[1].img, elements[2].left, elements[2].top);
        elements[2].img = elements[1].img;
        elements[1].flag = false;
        elements[2].flag = true;
      }
      if (elements[5].flag == false) {
        ctx.clearRect(elements[1].left, elements[1].top, elements[1].width, elements[1].height);
        ctx.drawImage(elements[1].img,elements[5].left, elements[5].top);
        elements[5].img = elements[1].img;
        elements[1].flag = false;
        elements[5].flag = true;
      }
      if (elements[0].flag == false) {
        ctx.clearRect(elements[1].left, elements[1].top, elements[1].width, elements[1].height);
        ctx.drawImage(elements[1].img,elements[0].left, elements[0].top);
        elements[0].img = elements[1].img;
        elements[1].flag = false;
        elements[0].flag = true;
      }
  }
}
function click2(event) { //11 квадрат
  let x = event.pageX - cvsLeft,
      y = event.pageY - cvsTop;
  if (y > elements[2].top && y < elements[2].top + elements[2].height && x > elements[2].left && x < elements[2].left + elements[2].width) {
      //alert(`rectangles ${elements[10].id}`);
      if (elements[1].flag == false) {
        ctx.clearRect(elements[2].left, elements[2].top, elements[2].width, elements[2].height);
        ctx.drawImage(elements[2].img, elements[1].left, elements[1].top);
        elements[1].img = elements[2].img;
        elements[2].flag = false;
        elements[1].flag = true;
      }
      if (elements[3].flag == false) {
        ctx.clearRect(elements[2].left, elements[2].top, elements[2].width, elements[2].height);
        ctx.drawImage(elements[2].img,elements[3].left, elements[3].top);
        elements[3].img = elements[2].img;
        elements[2].flag = false;
        elements[3].flag = true;
      }
      if (elements[6].flag == false) {
        ctx.clearRect(elements[2].left, elements[2].top, elements[2].width, elements[2].height);
        ctx.drawImage(elements[2].img,elements[6].left, elements[6].top);
        elements[6].img = elements[2].img;
        elements[2].flag = false;
        elements[6].flag = true;
      }
  }
}
function click3(event) { //11 квадрат
  let x = event.pageX - cvsLeft,
      y = event.pageY - cvsTop;
  if (y > elements[3].top && y < elements[3].top + elements[3].height && x > elements[3].left && x < elements[3].left + elements[3].width) {
      //alert(`rectangles ${elements[10].id}`);
      if (elements[2].flag == false) {
        ctx.clearRect(elements[3].left, elements[3].top, elements[3].width, elements[3].height);
        ctx.drawImage(elements[3].img, elements[2].left, elements[2].top);
        elements[2].img = elements[3].img;
        elements[3].flag = false;
        elements[2].flag = true;
      }
      if (elements[7].flag == false) {
        ctx.clearRect(elements[3].left, elements[3].top, elements[3].width, elements[3].height);
        ctx.drawImage(elements[3].img,elements[7].left, elements[7].top);
        elements[7].img = elements[3].img;
        elements[3].flag = false;
        elements[7].flag = true;
      }
  }
}
function click4(event) { //11 квадрат
  let x = event.pageX - cvsLeft,
      y = event.pageY - cvsTop;
  if (y > elements[4].top && y < elements[4].top + elements[4].height && x > elements[4].left && x < elements[4].left + elements[4].width) {
      //alert(`rectangles ${elements[10].id}`);
      if (elements[0].flag == false) {
        ctx.clearRect(elements[4].left, elements[4].top, elements[4].width, elements[4].height);
        ctx.drawImage(elements[4].img, elements[0].left, elements[0].top);
        elements[0].img = elements[4].img;
        elements[4].flag = false;
        elements[0].flag = true;
      }
      if (elements[8].flag == false) {
        ctx.clearRect(elements[4].left, elements[4].top, elements[4].width, elements[4].height);
        ctx.drawImage(elements[4].img,elements[8].left, elements[8].top);
        elements[8].img = elements[4].img;
        elements[4].flag = false;
        elements[8].flag = true;
      }
      if (elements[5].flag == false) {
        ctx.clearRect(elements[4].left, elements[4].top, elements[4].width, elements[4].height);
        ctx.drawImage(elements[4].img,elements[5].left, elements[5].top);
        elements[5].img = elements[4].img;
        elements[4].flag = false;
        elements[5].flag = true;
      }
  }
}
function click5(event) { //11 квадрат
  let x = event.pageX - cvsLeft,
      y = event.pageY - cvsTop;
  if (y > elements[5].top && y < elements[5].top + elements[5].height && x > elements[5].left && x < elements[5].left + elements[5].width) {
      //alert(`rectangles ${elements[10].id}`);
      if (elements[1].flag == false) {
        ctx.clearRect(elements[5].left, elements[5].top, elements[5].width, elements[5].height);
        ctx.drawImage(elements[5].img, elements[1].left, elements[1].top);
        elements[1].img = elements[5].img;
        elements[5].flag = false;
        elements[1].flag = true;
      }
      if (elements[4].flag == false) {
        ctx.clearRect(elements[5].left, elements[5].top, elements[5].width, elements[5].height);
        ctx.drawImage(elements[5].img,elements[4].left, elements[4].top);
        elements[4].img = elements[5].img;
        elements[5].flag = false;
        elements[4].flag = true;
      }
      if (elements[6].flag == false) {
        ctx.clearRect(elements[5].left, elements[5].top, elements[5].width, elements[5].height);
        ctx.drawImage(elements[5].img,elements[6].left, elements[6].top);
        elements[6].img = elements[5].img;
        elements[5].flag = false;
        elements[6].flag = true;
      }
      if (elements[9].flag == false) {
        ctx.clearRect(elements[5].left, elements[5].top, elements[5].width, elements[5].height);
        ctx.drawImage(elements[5].img,elements[9].left, elements[9].top);
        elements[9].img = elements[5].img;
        elements[5].flag = false;
        elements[9].flag = true;
      }
  }
}
function click6(event) { //11 квадрат
  let x = event.pageX - cvsLeft,
      y = event.pageY - cvsTop;
  if (y > elements[6].top && y < elements[6].top + elements[6].height && x > elements[6].left && x < elements[6].left + elements[6].width) {
      //alert(`rectangles ${elements[10].id}`);
      if (elements[2].flag == false) {
        ctx.clearRect(elements[6].left, elements[6].top, elements[6].width, elements[6].height);
        ctx.drawImage(elements[6].img, elements[2].left, elements[2].top);
        elements[2].img = elements[6].img;
        elements[6].flag = false;
        elements[2].flag = true;
      }
      if (elements[5].flag == false) {
        ctx.clearRect(elements[6].left, elements[6].top, elements[6].width, elements[6].height);
        ctx.drawImage(elements[6].img,elements[5].left, elements[5].top);
        elements[5].img = elements[6].img;
        elements[6].flag = false;
        elements[5].flag = true;
      }
      if (elements[7].flag == false) {
        ctx.clearRect(elements[6].left, elements[6].top, elements[6].width, elements[6].height);
        ctx.drawImage(elements[6].img,elements[7].left, elements[7].top);
        elements[7].img = elements[6].img;
        elements[6].flag = false;
        elements[7].flag = true;
      }
      if (elements[10].flag == false) {
        ctx.clearRect(elements[6].left, elements[6].top, elements[6].width, elements[6].height);
        ctx.drawImage(elements[6].img,elements[10].left, elements[10].top);
        elements[10].img = elements[6].img;
        elements[6].flag = false;
        elements[10].flag = true;
      }
  }
}
function click7(event) { //11 квадрат
  let x = event.pageX - cvsLeft,
      y = event.pageY - cvsTop;
  if (y > elements[7].top && y < elements[7].top + elements[7].height && x > elements[7].left && x < elements[7].left + elements[7].width) {
      //alert(`rectangles ${elements[10].id}`);
      if (elements[3].flag == false) {
        ctx.clearRect(elements[7].left, elements[7].top, elements[7].width, elements[7].height);
        ctx.drawImage(elements[7].img, elements[3].left, elements[3].top);
        elements[3].img = elements[7].img;
        elements[7].flag = false;
        elements[3].flag = true;
      }
      if (elements[6].flag == false) {
        ctx.clearRect(elements[7].left, elements[7].top, elements[7].width, elements[7].height);
        ctx.drawImage(elements[7].img,elements[6].left, elements[6].top);
        elements[6].img = elements[7].img;
        elements[7].flag = false;
        elements[6].flag = true;
      }
      if (elements[11].flag == false) {
        ctx.clearRect(elements[7].left, elements[7].top, elements[7].width, elements[7].height);
        ctx.drawImage(elements[7].img,elements[11].left, elements[11].top);
        elements[11].img = elements[7].img;
        elements[7].flag = false;
        elements[11].flag = true;
      }
  }
}
function click8(event) { //11 квадрат
  let x = event.pageX - cvsLeft,
      y = event.pageY - cvsTop;
  if (y > elements[8].top && y < elements[8].top + elements[8].height && x > elements[8].left && x < elements[8].left + elements[8].width) {
      //alert(`rectangles ${elements[10].id}`);
      if (elements[4].flag == false) {
        ctx.clearRect(elements[8].left, elements[8].top, elements[8].width, elements[8].height);
        ctx.drawImage(elements[8].img, elements[4].left, elements[4].top);
        elements[4].img = elements[8].img;
        elements[8].flag = false;
        elements[4].flag = true;
      }
      if (elements[9].flag == false) {
        ctx.clearRect(elements[8].left, elements[8].top, elements[8].width, elements[8].height);
        ctx.drawImage(elements[8].img,elements[9].left, elements[9].top);
        elements[9].img = elements[8].img;
        elements[8].flag = false;
        elements[9].flag = true;
      }
  }
}
function click9(event) { //11 квадрат
  let x = event.pageX - cvsLeft,
      y = event.pageY - cvsTop;
  if (y > elements[9].top && y < elements[9].top + elements[9].height && x > elements[9].left && x < elements[9].left + elements[9].width) {
      //alert(`rectangles ${elements[10].id}`);
      if (elements[10].flag == false) {
        ctx.clearRect(elements[9].left, elements[9].top, elements[9].width, elements[9].height);
        ctx.drawImage(elements[9].img, elements[10].left, elements[10].top);
        elements[10].img = elements[9].img;
        elements[9].flag = false;
        elements[10].flag = true;
      }
      if (elements[5].flag == false) {
        ctx.clearRect(elements[9].left, elements[9].top, elements[9].width, elements[9].height);
        ctx.drawImage(elements[9].img,elements[5].left, elements[5].top);
        elements[5].img = elements[9].img;
        elements[9].flag = false;
        elements[5].flag = true;
      }
      if (elements[8].flag == false) {
        ctx.clearRect(elements[9].left, elements[9].top, elements[9].width, elements[9].height);
        ctx.drawImage(elements[9].img,elements[8].left, elements[8].top);
        elements[8].img = elements[9].img;
        elements[9].flag = false;
        elements[8].flag = true;
      }
  }
}
function click10(event) { //11 квадрат
  let x = event.pageX - cvsLeft,
      y = event.pageY - cvsTop;
  if (y > elements[10].top && y < elements[10].top + elements[10].height && x > elements[10].left && x < elements[10].left + elements[10].width) {
      //alert(`rectangles ${elements[10].id}`);
      if (elements[11].flag == false) {
        ctx.clearRect(elements[10].left, elements[10].top, elements[10].width, elements[10].height);
        ctx.drawImage(eval(`part_img${arrNum[10]}`),elements[11].left, elements[11].top);
        elements[11].img = elements[10].img;
        elements[10].flag = false;
        elements[11].flag = true;
      }
      if (elements[9].flag == false) {
        ctx.clearRect(elements[10].left, elements[10].top, elements[10].width, elements[10].height);
        ctx.drawImage(elements[10].img,elements[9].left, elements[9].top);
        elements[9].img = elements[10].img;
        elements[10].flag = false;
        elements[9].flag = true;
      }
      if (elements[6].flag == false) {
        ctx.clearRect(elements[10].left, elements[10].top, elements[10].width, elements[10].height);
        ctx.drawImage(elements[10].img,elements[6].left, elements[6].top);
        elements[6].img = elements[10].img;
        elements[10].flag = false;
        elements[6].flag = true;
      }
  }
}
function click11(event) {
  let x = event.pageX - cvsLeft,
      y = event.pageY - cvsTop;
  if (y > elements[11].top && y < elements[11].top + elements[11].height && x > elements[11].left && x < elements[11].left + elements[11].width) {
      //alert(`rectangles ${elements[11].id}`);
      if (elements[10].flag == false) {
        ctx.clearRect(elements[11].left, elements[11].top, elements[11].width, elements[11].height);
        ctx.drawImage(elements[11].img,elements[10].left, elements[10].top);
        elements[10].img = elements[11].img;
        elements[11].flag = false;
        elements[10].flag = true;
      }
      if (elements[7].flag == false) {
        ctx.clearRect(elements[11].left, elements[11].top, elements[11].width, elements[11].height);
        ctx.drawImage(elements[11].img, elements[7].left, elements[7].top);
        elements[7].img = elements[11].img;
        elements[11].flag = false;
        elements[7].flag = true;
      }
  }
}
