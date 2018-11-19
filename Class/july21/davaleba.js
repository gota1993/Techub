submitButton = document.getElementById ('submitbutton')

submitButton.addEventListener('click', function () {
    document.getElementById(divID.value).style.color = color.value
    document.getElementById(divID.value).style.fontSize = size.value + 'px'
    document.getElementById(divID.value).style.textAlign = position.value 
})

