const load = document.querySelector('.sk-folding-cube');
const whole = document.querySelector('.whole');
const footer = document.querySelector('.footer');

function init(){
    setTimeout(() => {
        load.style.opacity = 0;
        load.style.display = 'none';

        window.location = 'main.html';
        setTimeout(() => (main.style.opacity = 1), 50);
    }, 4000);
}

init();