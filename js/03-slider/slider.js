var currentSlide = 0
var slides = document.getElementsByClassName('slide')
var slider = document.getElementById('slider');
var windowWidth = window.innerWidth // 823

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
 