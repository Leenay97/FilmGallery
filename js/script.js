document.addEventListener('DOMContentLoaded', (e) => {

    let filmBox = document.querySelector('.film-box');
    let filmTape = document.querySelector('.film-tape');
    let filmTapeBG = document.querySelector('.film-tape-bg');
    let mouseXprev ='0';

    //Click on box
    filmBox.addEventListener('click', (e) => {
        filmBox.classList.toggle('film-box_active');
        filmTape.classList.toggle('film-tape_active');
    });
    console.log(filmTape.style.width.slice(0, -2));
    let width = 80;
    let mouseListener = function (e) {
        if (width < 50) return;
        let mouseX = e.pageX;
        if (mouseX >= mouseXprev) {
            width += 0.3;
            filmTape.style.width = width + '%'
        } else {
            width -= 0.3;
            filmTape.style.width = width + '%'
            if (width < 50) {
                filmTape.style.removeProperty('width');              
                return false;
            }
        }
        mouseXprev = e.pageX;
    };
    filmTape.addEventListener('mousedown', e => {
        filmTape.addEventListener('mousemove', mouseListener);
    });

    filmTape.addEventListener('mouseup', e => {
        filmTape.removeEventListener('mousemove', mouseListener);
    });
})