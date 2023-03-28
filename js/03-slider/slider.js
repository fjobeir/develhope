var currentSlide = 0
var slides = document.getElementsByClassName('slide')
var slider = document.getElementById('slider');
var windowWidth = window.innerWidth //823

var prevBtn = document.querySelector('.prev-btn')
prevBtn.addEventListener('click', (event) => {
    console.log(event)
    goPrevSlide()
})
var nextBtn = document.querySelector('.next-btn')
nextBtn.addEventListener('click', function() {
    goNextSlide()
})

window.addEventListener('resize', function() {
    console.log('Window is resizing')
    windowWidth = window.innerWidth
    slider.style.transform = "translateX(-" + (currentSlide * windowWidth) + "px)"
})

function goNextSlide()
{
    if (currentSlide < slides.length - 1) {
        currentSlide = currentSlide + 1
    } else {
        currentSlide = 0
    }
    slider.style.transform = "translateX(-" + (currentSlide * windowWidth) + "px)"
}
function goPrevSlide()
{
    if (currentSlide > 0) {
        currentSlide = currentSlide - 1
    } else {
        currentSlide = slides.length - 1
    }
    slider.style.transform = "translateX(-" + (currentSlide * windowWidth) + "px)"
}

