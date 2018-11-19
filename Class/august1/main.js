$(document).ready(function () {


    //     $('div').each(function (index, element) {
    //         let n = $(this)
    //         console.log(n.text())
    //         console.log($(this).css('background-color'))
    //     })
    // })

    // $('img').attr({
    //     title: 'front end development',
    //     style: 'border: 2px dotted black',
    //     width: '350px'
    // })

    // $('img').each(function (index, element) {
    //     console.log($(this).attr('style'))

    // append()/appendTo()
    // prepend()/prependTo()
    // remove()

    // $('div').append(`<strong> Multiple Apend</strong>`)
    // $('.class-5').append(`<span> class-5 Content</span>`)
    // $(`<span> class-5 Content</span>`).appendTo('.class-1')

    // $('#header').wrap(`<header class='header__block'/>`)

    // $('.class-2').hide()

    // $('div').css({
    //     color: 'white',
    //     fontWeight: 'bold',
    //     background: 'lightblue'
    // })

    // $('div, h1').addClass('newClass')
    // if ($('h1').hasClass('newClass')) {
    //     console.log('h1 has a new Class')
    // }

    // Jquery Event Shortcuts

    /*
    click()
    blur()
    focus()
    mousemove()
    keydown()
    */

//    $('#header').click(function (event){
//     console.log(event)
//     $('#small__header').click()
// })

// $('#small__header').click(function (event){
//     console.log('small__header was clicked')
// })

// $('div').on('click mouseenter mouseleave', function(event){
//     $(this).toggleClass('entered')
// })

// $('div').on({
//     mouseenter: function (){
//         $(this).removeClass('entered2')
//         $(this).addClass('entered')
//     },

//     mouseleave: function () {
//         $(this).removeClass('entered')
//         $(this).addClass('entered2')
//     }
// })

// $('div').hover(
//     function(){
//         $(this).addClass('entered')
//     },

//     function(){
//         $(this).removeClass('entered')
//     }
// )

// localStorage
// sessionStorage

// let storage = window.localStorage

// $('#savebutton').click(function (){
//     let name = $('#name').val()
//     let old = storage.getItem('userName')
//     storage.setItem('userName', `${old} ${name}`)

//     console.log(storage.getItem('userName'))
// })

})