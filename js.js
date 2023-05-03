const container = document.querySelector('.container');
const button = document.querySelector('.changer');

const canvas = document.createElement('div');
canvas.classList.add('canvas')

//---------------------------------------------

container.appendChild(canvas);

function createCanvas(sizin){
    canvas.replaceChildren();
    boxes = [];
    for(let i = 1; i<=sizin; i++){
        boxes.push(i);
        boxes[i-1] = document.createElement('div');
        boxes[i-1].classList.add('box');
        boxes[i-1].style.height = `${box_dimensions}px`;
        boxes[i-1].style.width = `${box_dimensions}px`;
        boxes[i-1].addEventListener('mouseover', function(){
            boxes[i-1].classList.add('hovered');
        });
        canvas.appendChild(boxes[i-1]);
    };
    container.appendChild(canvas);
};
//---------------------------------------------

let choice = 16;
let count = choice*choice;
let boxes = [];
let box_dimensions = 0;

button.addEventListener('click', function(){
    choice = prompt('choose your grid size (up to 100)', 16);
    count = choice*choice;
    box_dimensions = 800/choice;
    createCanvas(count);
});

//---------------------------------------------