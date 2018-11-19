// $(document).ready(function () {
//     $('#loadBtn').click(function () {
//         // $('#myDiv').load('templates/template.html #small')
//         $('#myDiv').load('templates/template.html', function (response, status, xhr) {
//             // let myreq = new XMLHttpRequest()
//             // console.log(response)

//             if (status === 'error') {
//                 alert(xhr.statusText)
//             }
//         })

//         let request
//         if (window.XMLHttpRequest) {
//             request = new XMLHttpRequest();
//         } else if (window.ActiveXObject) {

//         }

//         request.addEventListener('progress', progressFunc)
//         request.addEventListener('load', completed)
//         request.addEventListener('error', erorFunc)
//         request.addEventListener('abort', cancelFunc)

//         request.onreadystatechange = function() {
//             if (request.readyState == XMLHttpRequest.DONE) {
//                 console.log(request.responseText)
//             }
//             else {
//                 console.log('Request - ', request.readyState)
//             }
//         }

//         function progressFunc() {
//             console.log('Progress Function')
//         }
//         function erorFunc() {
//             console.log('Error Function')
//         }
//         function cancelFunc() {
//             console.log('Cancel Function')
//         }
//         function completed() {
//             console.log('Completed Function')
//         }

//         request.open('GET', 'templates/template.html', true)
//         request.send(null)
//     })
// })

$(document).ready(function () {



    $('#loadBtn').click(function () {

        let url = 'https://jsonplaceholder.typicode.com/users'

        //     //$.getJSON(url, data, callback)
        //     //$.getJSON(url, callback)

        //     $.get(url, function (data) {
        //         console.log(data)
        //         $('#myDiv').append(data.map( el => {
        //             return `<h3> Mr. ${el.name} </h3>`
        //         }).join('')
        //     )
        // })

        $.ajax({
            url: url,
            data: null,
            method: 'get',
            dataType: 'json',
            success(data, status, xhr) {
                // console.log(data)
                $('#myDiv').append(data.map(el => {
                    return `<h3> Mr. ${el.name} </h3>`
                }).join('')
                )
            },
            error(xhr, status, error) {
                console.log(error)
            }
        })


    })

})