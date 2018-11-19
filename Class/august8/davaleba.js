// let countButton = document.getElementById('count')
// let textArea = document.getElementById('textarea')

// countButton.addEventListener('click', function(){
//     let myRe = /[0-9a-z]+/gi;
//     let res = textArea.value.match(myRe)
//     console.log(res)
// })

window.onload = () => {
    let countOb = {}
    let text = document.getElementById('textarea')
    let countButton = document.getElementById('count')
    let result = document.getElementById('result')

    countButton.addEventListener('click', event => {
        let str = text.value
        str = str.replace(/[^A-Za-z]/g, '').toLowerCase().split('')
        str.forEach(element => {
            if (countOb[element]) {
                countOb[element] += 1
            }
            else {
                countOb[element] = 1
            }
        })
        for (let prop in countOb) {
            result.innerHTML+= `<tr>
                                <td>${prop}</td>
                                <td>${countOb[prop]}</td>
                                </tr>`
        }
    })
}