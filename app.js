document.addEventListener('DOMContentLoaded', function() {

var images = document.querySelectorAll('.img-chair');
var next = document.querySelector(".main-slider-next");
var prev = document.querySelector(".main-slider-prev");

var counter = 0;

    images[0].classList.add('visible');

    prev.addEventListener('click', function () {
        images[counter].classList.remove('visible');
        counter--;
        if (counter === -1) {
            counter = images.length- 1;
        }
        images[counter].classList.add('visible');

    });

    next.addEventListener('click', function () {
        images[counter].classList.remove('visible');
        counter++;
        if (counter === images.length) {
            counter = 0;
        }
        images[counter].classList.add('visible');

    });




});
