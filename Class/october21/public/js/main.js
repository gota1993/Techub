const addBtn = document.getElementById('addBtn');
const prefixInput = document.getElementById('countryName')
const countriesList = document.getElementById('countries')

addBtn.addEventListener('click', ({ target }) => {
    let num_1 = document.getElementById('num_1').value;
    let num_2 = document.getElementById('num_2').value;
    let result = document.getElementById('result')
    let url = `/add?num_1=${num_1}&num_2=${num_2}`;
    let loader = document.getElementById('loader');
    loader.classList.add('loader--show')
    loader.classList.remove('loader--hide')

    /*
    fetch(url, {
        method: 'GET',
    }).then(res => {
        return res.text();
    }).then(data => {
        result.innerHTML = `Sum is ${data}`;
    }).catch(err => {
        console.error(err)
    }).finally(() => {
        loader.classList.remove('loader--show');
        loader.classList.add('loader--hide');
    })
    */

    $.ajax({
        url: '/add',
        method: 'GET',
        data: { num_1, num_2 },
    }).done(data => {
        result.innerHTML = `Sum is ${data}`
    }).always(() => {
        hideLoader(loader)
    })
})

prefixInput.addEventListener('keyup', ({ target }) => {
    const minLength = Number(target.dataset.minlength)
    countriesList.innerHTML = ''
    if (target.value.length > minLength) {

        const url = `/countries/${target.value}`
        fetch(url, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(countries => {
                if(countries.length > 0) {
                    countriesList.innerHTML = countries.map(name => `<option value="${name}">`).join('')
                }
            })
            .catch(err => console.error(err))
    }
})

// function showLoader(loader) {
//     loader.classList.add('loader-show')
//     loader.classList.remove('loader-hide')
// }

// function hideLoader(loader) {
//     loader.classList.remove('loader-show')
//     loader.classList.add('loader-hide')
// }