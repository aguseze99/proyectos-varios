function toggleMenu(){
    const menuIcon = document.querySelector('.menuIcon')
    const navBar = document.getElementById('navBar')
    menuIcon.classList.toggle('active')
    navBar.classList.toggle('active')
}

const sliderShow = document.getElementById('sliderShow')

const slides = sliderShow.getElementsByTagName('video')

let index = 0;

function nextSlider(){
    slides[index].classList.remove('active')
    index = (index+1) % slides.length;
    slides[index].classList.add('active')
}

function prevSlider(){
    slides[index].classList.remove('active')
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active')
}

const sliderShowText = document.getElementById('sliderShowText')

const sliderText = sliderShowText.getElementsByTagName('div')

let i = 0;

function nextSliderText(){
    sliderText[i].classList.remove('active')
    i = (i + 1) % sliderText.length
    sliderText[i].classList.add('active')
}

function prevSliderText(){
    sliderText[i].classList.remove('active')
    i= (i - 1 + sliderText.length) % sliderText.length
    sliderText[i].classList.add('active')
}