const burger = document.querySelector('.header__burger'); // Get a burger button
const open = document.querySelector('.menu__body'); // Get a burger menu

// Making a script so that when you click on the burger button, the burger menu will appear
burger.addEventListener('click', function(event) { 
    this.classList.toggle('active');
    open.classList.toggle('active');
    event.stopPropagation();
});


const body = document.body; // Get the whole page

// Making a script so that when you click on the body, the burger closes, except for the case when we click on the burger menu itself
body.addEventListener('click', function(event) {
    if(event.target !== open) {
       open.classList.remove('active');
       burger.classList.remove('active');
    }
});


const img = document.querySelectorAll('.block-hotels__img img'); // Get all images
const popUp = document.querySelector('.pop-up'); // Get All styles
const popUpImg = document.querySelector('.pop-up img'); // Get active image

// Making a script so that when you click on the image, the image got a styles
img.forEach(img => {
    img.onclick = () => {
        popUp.style.display = 'block';
        popUpImg.src = img.getAttribute('src')
    }
})


const bth = document.querySelector('.pop-up span'); // Get button

// Making a script so that when you click on the button, image remove styles
bth.addEventListener('click', function() {
    popUp.style.display = 'none'; 
})


const view = document.querySelector('.hotels__img'); // Get view image
const view2 = document.querySelector('.hotel__view'); // Get view2 image

const view3 = document.querySelector('.hotels__img-2'); // Get view3 image
const view4 = document.querySelector('.hotel__view-2'); // Get view4 image

const view5 = document.querySelector('.hotels__img-3');
const view6 = document.querySelector('.hotel__view-3');

// Creating a script so that if the width is less than 1400, view and view2 get their own styles
function checkMediaQuery() {
    if (window.innerWidth <= 1400) {
        view.style.display = 'none';
        view2.style.display = 'flex';
        view3.style.display = 'none';
        view4.style.display = 'flex';
        view5.style.display = 'none';
        view6.style.display = 'flex';
    } else if (window.innerWidth >= 1400) {
        view.style.display = 'flex';
        view2.style.display = 'none';
        view3.style.display = 'flex';
        view4.style.display = 'none';
        view5.style.display = 'flex';
        view6.style.display = 'none';
    }
}

window.addEventListener('resize', checkMediaQuery); // Get a method for the previous script to work


