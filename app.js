const board = document.querySelector('#board'),
      colors = ['#39ff14', '#fe59c2', '#fe019a', '#04d9ff', '#5555ff', '#ff073a', '#f80000', '#ccff00', ' #7df9ff'],
      SQUARES_NUMBER = 506;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', setColor);

    square.addEventListener('mouseleave', removeColor);

    board.append(square);
}

function setColor(e) {
    target = e.target;
    const color = getRandomColor();
    target.style.background = color;
    target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(e) {
    target = e.target;
    target.style.background = '#1d1d1d';
    target.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}