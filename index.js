let LEVEL = 1;

const levels = document.querySelectorAll('.level');
const start = document.querySelector('.start');

levels.forEach((level) => {
    level.onclick = clickHandler;
})

function clickHandler(event) {
    document.querySelector('.level-bordered')?.classList.remove('level-bordered');
    event.target.classList.add('level-bordered');
    LEVEL = 1;
}

start.onclick = (event) => {
    document.querySelector('.center').remove();
}



