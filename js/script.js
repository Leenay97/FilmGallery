document.addEventListener('DOMContentLoaded', (e) => {



    let filmContainer = document.querySelector('.film-container')
    let filmBox = document.querySelector('.film-box');
    let filmTape = document.querySelector('.film-tape');
    let filmTapeBG = document.querySelector('.film-tape-bg');
    let openButton = document.querySelector('.open-button');
    let leftButton = document.querySelector('.left-button');
    let rightButton = document.querySelector('.right-button');
    let filmShots = document.querySelector('.film-tape-bg__shots')
    let mouseXprev = '0';
    let width = 80;
    let buttonTrigger = 0;

    //Click on box
    openButton.addEventListener('click', (e) => {
        filmBox.classList.toggle('film-box_active');
        filmTape.style.removeProperty('width');
        width = 80;
        filmTape.classList.toggle('film-tape_active');
        document.querySelectorAll('.button-container__scroll').forEach((item)=> item.classList.toggle('button-container__scroll_disabled'));
        if (buttonTrigger == 0) {

            setTimeout(() => openButton.classList.toggle('button-hidden'), 300);
            setTimeout(() => openButton.innerHTML = "Close", 180)
            openButton.classList.toggle('button-hidden');
            for (i = 1; i < 23; i++){
                filmShots.innerHTML += `<img class="film-shot shot_${i}" src="/img/photo/1/${i}-n.png">`
            }
            buttonTrigger = 1;

        } else {

            setTimeout(() => openButton.classList.toggle('button-hidden'), 300);
            setTimeout(() => openButton.innerHTML = "Open", 180)
            setTimeout(function(){
                filmShots.innerHTML = ''
            },300);
            openButton.classList.toggle('button-hidden');
            buttonTrigger = 0;
        };

    });

    leftButton.addEventListener('click', (e) => {
        
        if (filmTape.offsetWidth > (22*150)) return;
        width += 50;
        filmTape.animate({
            width: `${width}%`
        }, 300, function () { });
        setTimeout(function () {

            filmTape.style.width = width + '%';
        }, 300);
    })
    rightButton.addEventListener('click', (e) => {
        if (width <= 80) return;
        width -= 50;
        filmTape.animate({
            width: `${width}%`
        }, 300, function () { });
        setTimeout(function () {
            filmTape.style.width = width + '%';
        }, 300);
    })

    console.log(filmTape.style.width.slice(0, -2));

    // let mouseListener = function (e) {
    //     if (!filmContainer.classList.contains('film-box_active')) return;
    //     if (width < 80) return;
    //     let mouseX = e.pageX;
    //     if (mouseX >= mouseXprev) {
    //         width += 0.3;
    //         filmTape.style.width = width + '%'
    //         if (width < 80) {
    //             filmTape.style.removeProperty('width');
    //             filmTape.classList.remove('film-tape_active');  
    //             filmContainer.classList.remove('film-box_active');
    //             width = 100;            
    //             return false;
    //         }
    //     } else {
    //         width -= 0.3;
    //         filmTape.style.width = width + '%'
    //         if (width < 80) {
    //             filmTape.style.removeProperty('width');
    //             filmTape.classList.remove('film-tape_active');  
    //             filmContainer.classList.remove('film-box_active');
    //             width = 100;            
    //             return false;
    //         }
    //     }
    //     mouseXprev = e.pageX;
    // };
    // filmTape.addEventListener('mousedown', e => {
    //     filmTape.addEventListener('mousemove', mouseListener);
    // });

    // filmTape.addEventListener('mouseup', e => {
    //     filmTape.removeEventListener('mousemove', mouseListener);
    // });
})