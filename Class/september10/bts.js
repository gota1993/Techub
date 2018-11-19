class Node {
    constructor(value = null, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null
    }

    addNode(value) {
        if (this.root === null) {
            this.root = new Node(value)
        } else {
            let currentRoot = this.root
            while (true) {
                if (currentRoot.value > value) {
                    //Left
                    if (currentRoot.left) {
                        currentRoot = currentRoot.left
                    } else {
                        currentRoot.left = new Node(value)
                        break
                    }
                } else {
                    //Right
                    if (currentRoot.right) {
                        currentRoot = currentRoot.right
                    } else {
                        currentRoot.right = new Node(value)
                        break
                    }
                }
            }
        }
        return this
    }
}

let numbers = [3, 5, 7, 8, 10, 1, 2, 4, 6]
let myBST = new BST()
numbers.map(num => myBST.addNode(num))

console.log(myBST)