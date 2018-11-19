function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;mn
}


randomColor.addEventListener('click', function () {
    contentText.style.color = getRandomColor()
})

fontsize.addEventListener('keyup', function () {
    contentText.style.fontSize = fontsize.value + 'px'
})

border.addEventListener('keyup', function () {
    contentText.style.border = border.value
})

