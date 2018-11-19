let body = document.body
let container = body.firstElementChild
let containerChildren = container.children

for (i = 0; i < 6; i++) {
    for (j = 2; j < 4; j++) {
        containerChildren[i].children[j].style.background = "red"
    }
}

for (i = 2; i < 4; i++) {
    for (j = 0; j < 6; j++) {
        containerChildren[i].children[j].style.background = "green";
        if (i == 2 && j == 2 || i == 3 && j == 3) {
            containerChildren[i].children[j].style.background = "red"
        }
    }
}




