window.onload = () => {
    let canvas = document.querySelector('canvas')
    let con = canvas.getContext('2d')

    let borderColor = '#c8c8c8'

    let centerX = canvas.width / 2
    let centerY = canvas.height / 2

    // Outer Gradient

    // con.beginPath()
    // let gradient = con.createLinearGradient(centerX, 20, centerX, 200)
    // gradient.addColorStop(0, '#fff')
    // gradient.addColorStop(1, '#ddd')

    // con.fillStyle = gradient

    // con.rect(20, 20, canvas.width - 40, canvas.height - 40)
    // con.fill()
    // con.strokeStyle = borderColor
    // con.stroke()
    // con.closePath()

    con.beginPath()
    let gradient = con.createRadialGradient(centerX, centerY / 1.2, 50, 100, 50, 120)
    gradient.addColorStop(0, '#888')
    gradient.addColorStop(1, '#fff')
    con.fillStyle = gradient
    con.arc(centerX, centerY / 1.2, 50, 0, 2 * Math.PI, false )
    con.fill()
    con.stroke()
    con.closePath()

}