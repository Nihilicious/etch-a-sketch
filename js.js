const canvas = document.querySelector('.canvas');
let htmlstring = '';
for (let i = 1; i <= 16; i++) { 
    for (let o = 1; o <= 16; o++){
        htmlstring += `<div class="box"></div>`;
    };
};




canvas.innerHTML = htmlstring;