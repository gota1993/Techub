let divElement = document.createElement('div')
document.body.appendChild(divElement)
divElement.textContent = 'Dynamic Text'
divElement.classList.add('box')
let liElement = document.createElement('li')
liElement.innerHTML = 'Li Element'
liElement.style.fontSize = '20px'
// liElement.append(' Append String')
let strongElement = document.createElement('strong')
strongElement.textContent = ' I am a strong element'
liElement.append(strongElement)
// mylist.insertBefore(liElement, mylist.children[2])
mylist.children[2].after(liElement)
let clonedLiElement = liElement.cloneNode(true)
mylist.children[1].after(clonedLiElement)
// mylist.children[1].replaceWith(liElement)

let removeElement = mylist.children[mylist.children.length - 1]

removeElement.remove()
mylist.removeChild(removeElement)