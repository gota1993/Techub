var colorPickerButton = document.getElementById ('color-picker-button')
var box1 = document.querySelector ('.box1')

var row1 = document.getElementsByClassName('row1')
var row2 = document.getElementsByClassName('row2')
var row3 = document.getElementsByClassName('row3')

for (let i = 0; i < row1.length; i++) {
    row1[i].addEventListener("click", function(){
        
    var selected1 = document.querySelector(".selected");
    if(selected1){
        selected1.classList.remove("selected");
    }
    this.classList.add("selected");
        
    })
}

for (let k = 0; k < row2.length; k++) {
    row2[k].addEventListener("click", function(){
        
    var selected2 = document.querySelector(".selected2");
    if(selected2){
        selected2.classList.remove("selected2");
    }
    this.classList.add("selected2");
        
    })
}

for (let j = 0; j < row3.length; j++) {
    row3[j].addEventListener("click", function(){
        
    var selected3 = document.querySelector(".selected3");
    if(selected3){
        selected3.classList.remove("selected3");
    }
    this.classList.add("selected3");
        
    })
}

colorPickerButton.addEventListener ('click', function () {
    color1 = window.getComputedStyle(document.querySelector('.selected'), null).getPropertyValue('background-color');
    document.querySelector('.result1').style.backgroundColor = color1
    color2 = window.getComputedStyle(document.querySelector('.selected2'), null).getPropertyValue('background-color');
    document.querySelector('.result2').style.backgroundColor = color2
    color3 = window.getComputedStyle(document.querySelector('.selected3'), null).getPropertyValue('background-color');
    document.querySelector('.result3').style.backgroundColor = color3
})