$(document).ready(function () {
    // $('h1').myPlugin()
    // $('h1').myPlugin2()
    $('h1')
    .styleElement ({
        text: 'Hello World',
        color: 'green',
        fontSize: '20px',
        backgroundColor: 'aqua'
    })

    let worker = new Worker('work.js')
    worker.postMessage('Hello my worker..!')
    worker.addEventListener('message', (event) => {
        console.log(event.data)
        worker.terminate()
    })
})