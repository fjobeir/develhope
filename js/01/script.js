function colorizeArea()
{
    var userColor = document.getElementById('color-picker')
    theArea.style.backgroundColor = userColor.value
    
}

function increaseFontSize()
{
    var currentFontSize = theArea.style.fontSize
    if (currentFontSize) {
        currentFontSize = parseInt(currentFontSize)
        if (currentFontSize < 40) {
            currentFontSize = currentFontSize + 2
        }
        console.log(currentFontSize)
    } else {
        currentFontSize = 18
    }
    theArea.style.fontSize = currentFontSize + 'px'
}

var theArea = document.getElementById('area')
theArea.innerHTML = "Changed By JS"
theArea.style.width = "200px"
theArea.style.height = "100px"