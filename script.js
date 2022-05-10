const canvas = document.getElementById('canvas');

for (let i = 1; i <= 16; i++) {
    for (let j = 1; j <= 16; j++) {
    canvas.innerHTML += '<div class="pixel"></div>'
    }
}

let pixels = document.querySelectorAll('.pixel');

pixels.forEach((pxl) => {
    pxl.addEventListener('mouseover', () => {
        pxl.style.backgroundColor = 'black';
    });
});