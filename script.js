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


const viewDelete = document.querySelectorAll('.hotels__img'); // Get view image
const viewAdd = document.querySelectorAll('.hotel__view'); // Get view2 image


// Creating a script so that if the width is less than 1400, view and view2 get their own styles
function checkMediaQuery() {
    if (window.innerWidth <= 1400) {
        viewDelete.forEach(item => {
            item.style.display = 'none';
        })
    } else if (window.innerWidth >= 1400) {
       viewAdd.forEach(item => {
            item.style.display = 'flex';
       })
    }
}

window.addEventListener('resize', checkMediaQuery); // Get a method for the previous script to work

