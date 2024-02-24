const centerbox = document.querySelector('.box');
const button = document.querySelector('button');

let size = 4;

button.addEventListener('click', (e) => {
    size = prompt('Number, brotherman');
    if (size >= 100) {
        size = 100;
    }
    generate();
});


function generate() {
    const resolution = size;
    const squareSize = 100/resolution + "%";
    let oldboxes = document.querySelectorAll('.square');
    oldboxes.forEach( (t) => {
        t.remove();
    })
    for (i = 0; i < resolution*resolution; i++) {
        const square = document.createElement('div');
        square.setAttribute('class', 'square');
        square.style.width = squareSize;
        square.style.height = squareSize;
        square.addEventListener('mouseenter', (e) => {
            e.target.style.background = "black";
        });
        centerbox.appendChild(square);
    }
}

generate();