let usersData = 'https://jsonplaceholder.typicode.com/users'

fetch(usersData)
    .then(response => response.json())
    .then(json => {
        document.body.innerHTML = json.map(user => {
            return `
<h3 class='persons'>Full name: ${user.name} <br> Address: ${user.address.street}, ${user.address.suite}, ${user.address.city} <span class="del">X</span> <span class="edit">EDIT</span></h3>`
        }).join('');
    })

let persons = document.getElementsByTagName('h3')

console.log(persons)

