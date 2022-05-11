const canvas = document.getElementById('canvas');

//fill canvas with divs
for (let i = 1; i <= 16; i++) {
    for (let j = 1; j <= 16; j++) {
    canvas.innerHTML += '<div class="pixel"></div>';
    }
}


// let user "draw" by hovering mouse
let pixels = document.querySelectorAll('.pixel');

pixels.forEach((pxl) => {
    pxl.addEventListener('mouseover', () => {
        pxl.style.backgroundColor = 'black';
    });
});


// let user customize grid size
const btnCustom = document.getElementById('btn-custom');

btnCustom.addEventListener('click', () => {
    let sqrNum = prompt('Insert the number of squares per side. (min: 2 | max: 100)');
    
    if (sqrNum < 2) {
        sqrNum = 2;
    } else if (sqrNum > 100) {
        sqrNum = 100;
    }

    canvas.innerHTML = '';

    for (let i = 1; i <= sqrNum; i++) {
        for (let j = 1; j <= sqrNum; j++) {
        canvas.innerHTML += '<div class="pixel"></div>';
        }
    }

    canvas.style.gridTemplateColumns = `repeat(${sqrNum}, ${100 / sqrNum}%)`;
    canvas.style.gridTemplateRows = `repeat(auto-fill, ${100 / sqrNum}%)`;

    let pixels = document.querySelectorAll('.pixel');

    pixels.forEach((pxl) => {
        pxl.addEventListener('mouseover', () => {
            pxl.style.backgroundColor = 'black';
        });
    });
});