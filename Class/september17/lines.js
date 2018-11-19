window.onload = function () {
    const canvas = document.getElementById('myCanvas')
    const context = canvas.getContext('2d')

    context.strokeStyle = 'red'
    context.lineWidth = 10
    context.beginPath()
    context.moveTo(150, 20)
    context.lineTo(75, 200);
    context.lineTo(225, 200)
    context.lineTo(150, 20)

    // context.lineJoin = 'round'

    context.closePath()
    context.stroke()

    // context.fillStyle='black';
    // context.fill();
    
    
    
}