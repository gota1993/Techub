showInfo.addEventListener ('click', function (){
    right.style.display = 'block'
    resultName.textContent = namee.value
    resultSurname.textContent = surname.value
    resultAge.textContent = age.value
})

save.addEventListener ('click', function (){
    let storage = window.localStorage
    storage.setItem('Name', namee.value)
    storage.setItem('Surname', surname.value)
    storage.setItem('Age', age.value)
})