class HashTable {
    constructor() {
        this.table = new Array(255)
    }

    add(value){
        this.table[this.hash(value, 255)] = value
    }

    check(value){
        return !!this.table[this.hash(value, 255)]
    }

    hash(value, max){
        let num = 0
        for (let i = 0; i < value.length; i++) {
            num += value.charCodeAt(i) * i
        }
        return num % max
    }

    remove(value){
        this.deleteHash = this.hash(value, 255)
        if(this.check(value)) {
            // this.table.splice(this.deleteHash, 1)
            delete this.table[this.deleteHash]
        }
    }
}

let hTable = new HashTable()
hTable.add('HastTables Example')
console.log(hTable.hash('HastTables Example', 100));
console.log(hTable.check('HastTables Example'))
hTable.remove('HastTables Example')
console.log(hTable.check('HastTables Example'))