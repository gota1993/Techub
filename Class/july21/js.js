let setInt = setInterval(showTime, 1000)

window.onload = showTime()

function showTime() {
    let date = new Date();
    let shortdate = date.toLocaleTimeString()
    clock.innerText = shortdate;
}

pausetime.addEventListener('focusout', ({ target }) => {
    setTimeout(() => { return clearInterval(setInt) }, target.value * 1000)
})

resume.addEventListener('click', function () {
    setInt = setInterval(showTime, 1000)
})
