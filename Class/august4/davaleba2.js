let container = document.getElementById('container')

// for (i = 0; i < 200; i++) {
//     let div = document.createElement('div');
//     div.textContent = i+1
//     container.appendChild(div)
// }

let numbers = []

for (i = 1; i < 151; i++) {
    numbers.push(Number(i))
}

numbers.forEach(element => {
    let div = document.createElement('div')
    div.setAttribute('class', 'number number' + Number(element + 1))
    div.setAttribute('id', element)
    container.appendChild(div)
    div.textContent = Number(element)
});

asc.addEventListener('click', function () {
    numbers.sort(function (a, b) { return a - b });
    for (i = 0; i < numbers.length; i++) {
        container.children[i].textContent = numbers[i]
    }
})

desc.addEventListener('click', function () {
    numbers.sort(function (a, b) { return b - a });
    for (i = 0; i < numbers.length; i++) {
        container.children[i].textContent = numbers[i]
    }
})

for (i = 0; i < numbers.length; i++) {
    divs = document.getElementsByClassName('number')
    divs[i].addEventListener('click', function (e) {
        divNumber = Number(e.target.getAttribute('id'))
        var index = numbers.indexOf(divNumber);
        numbers.splice(index, 1);
        divs[index].remove()
    })
}