class Set {
    constructor() {
        this.elements = []
    }

    add(el) {
        if (this.elements.indexOf(el) === -1) {
            this.elements.push(el)
        }
    }

    remove(el) {
        let index = this.elements.indexOf(el)
        if (index !== -1) {
            this.elements.splice(index, 1)
            console.log(this.elements)
        }
    }

    has(el) {
        console.log(this.elements.includes(el))
    }
}

let mySet = new Set()

mySet.add(1)
mySet.add(1)
mySet.add(2)
mySet.add(3)
mySet.remove(3)
mySet.has(5)
