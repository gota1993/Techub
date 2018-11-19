saveButton.addEventListener('click', showResult)


function showResult() {


    let prom = new Promise(function (resolve, reject) {
        let loading = document.createElement ('div')
        loading.textContent = 'Loading'
        surati.after(loading)
        setTimeout(() => {
            loading.remove()
            resolve()
        }, 2000);
    })

    prom
        .then(resolve => {
            resultdiv.style.display = 'block'
            surati.style.display = 'block'
            line.style.display = 'block'
            dayresult.textContent = day.value
            monthresult.textContent = month.value
            yearresult.textContent = year.value
            cityresult.textContent = city.value
            aboutresult.textContent = about.value
        })
        .catch (error => {
            console.log('error')
        })

}

