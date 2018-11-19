colorchanger.addEventListener ('click', function (){
    let divNumber = Math.floor(Math.random()*20) + 1
    let selectedDiv = document.getElementById ('box'+divNumber)
    if (selectedDiv.getAttribute('class') == null) {
        selectedDiv.classList.add('green')
    }
    else if (selectedDiv.getAttribute('class') == 'green') {
        selectedDiv.removeAttribute('class')
        selectedDiv.classList.add('orange')
    }
    else if (selectedDiv.getAttribute('class') == 'orange') {
        selectedDiv.removeAttribute('class')
        selectedDiv.classList.add('yellow')    
    }
    else if (selectedDiv.getAttribute('class') == 'yellow') {    
        selectedDiv.removeAttribute('class')
    }
})