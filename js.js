const container = document.querySelector('.container');

const canvas = document.createElement('div');
canvas.classList.add('canvas')

let choice = 16;
let count = choice*choice;
const boxes = [];

for(let i = 1; i<=count; i++){
    boxes.push(i);
    boxes[i-1] = document.createElement('div');
    boxes[i-1].classList.add('box');
    boxes[i-1].addEventListener('mouseenter', function(){
        boxes[i-1].classList.add('hovered');
    });
    canvas.appendChild(boxes[i-1]);
};


console.log(boxes);
console.log(canvas);
container.appendChild(canvas);