
window.onload = function () {
    const canvas = document.getElementById('myCanvas')
    const con = canvas.getContext('2d')
    let ballX = 50
    let ballY = 50
    let radius = 20

    function draw() {
        con.fillStyle = "black"
        con.fillRect(0, 0, canvas.width, canvas.height)

        con.fillStyle = "red"
        con.beginPath()
        con.arc(ballX, ballY, radius, 0, 2 * Math.PI, true)
        con.closePath()
        con.fill()
    }

    draw()

    window.addEventListener('keydown', function (e) {
        if (e.keyCode == '37') {
            if (ballX > radius + 2) {
                ballX -= 3
            }
        }
        if (e.keyCode == '39') {
            if (ballX < canvas.width - radius - 2)
                ballX += 3

        }
        if (e.keyCode == '38') {
            if (ballY > radius + 2) {
                ballY -= 3
            }

        }
        if (e.keyCode == '40') {
            if (ballY < canvas.height - radius - 2) {
                ballY += 3

            }
        }
        draw()
    })
}