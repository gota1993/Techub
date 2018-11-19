function dragStart(event) {
    try {
        event.dataTransfer.setData('text/plain', event.target.id)
    }
    catch {
        event.dataTransfer.setData('text', event.target.id)
    }
}

let img = document.getElementById('snapshot')
img.addEventListener('dragstart', dragStart, false)

let target = document.getElementById('target__container')
target.addEventListener('drop', dropped, false)
target.addEventListener('dragover', cancel, false)
target.addEventListener('dragcenter', cancel, false)

function dropped(event) {
    let id
    cancel(event)
    try {
        id = event.dataTransfer.getData('text/plain')
    }
    catch {
        id = event.dataTransfer.getData('plain')
    }

    event.target.appendChild(document.getElementById(id))
}

function cancel(event) {
    if (event.preventDefault) event.preventDefault()
    if (event.stopPropagation) event.stopPropagation
    return false
}