var currentSlide = 0
var slides = document.getElementsByClassName('slide')

function goNextSlide()
{
    if (currentSlide < slides.length - 1) {
        currentSlide = currentSlide + 1
        var slider = document.getElementById('slider');
        var windowWidth = window.innerWidth // 823
        slider.style.transform = "translateX(-" + (currentSlide * windowWidth) + "px)"
    } else {
        alert('Where are you going?!')
    }
}

// Homework
// 1) goPrevSlide() function
// 2) creating an infinite slider 