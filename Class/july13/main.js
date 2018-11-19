// String.prototype.show = function () {
//     console.log(this)
// }

String.prototype.repeat = function (n) {
    return new Array(n + 1).join(this);
}

// "Hello World".show()

// console.log("Blah".repeat(4))

// // *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

//     function User(name, birthday) {
//         this.name = name;
//         this.sayName = function () {
//             console.log(`Name: ${this.name}, Age - ${something()}`)
//         }
//         function something() {
//             return new Date().getFullYear() - birthday.getFullYear();
//         }
//     }   

//     let gela = new User ('Gela', new Date(1990, 2, 5))
//     console.log(gela.sayName())

// // *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

//     function Person(name, birthday) {
//         function calcAge(){
//             return new Date().getFullYear() - birthday.getFullYear();
//         }
//         return {
//             sayName() {
//                 console.log(`Name: ${name}, Age - ${calcAge()}`)
//             }
//         }
//     }

// let gela2 = Person('Gela', new Date(1990, 2, 5))
// console.log(gela2.sayName())

// // *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

//     function Human (name, birthday) {
//         this._name = name;
//         this._birthday = birthday;
//     }

//     Human.prototype._calcAge = function() {
//         return new Date().getFullYear() - this._birthday.getFullYear();
//     }

//     Human.prototype.sayName = function () {
//         console.log(`Name: ${this._name}, Age - ${this._calcAge()}`)
//     }

//     let human = new Human('John', new Date(1996, 5, 6));
//     human.sayName();

// // *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

//     class Animal {
//         constructor(name){
//             this.name = name;
//         }
//         sayName(){
//             console.log(this.name.repeat(3));
//         }
//     }

//     let cat = new Animal('Tom');
//     cat.sayName();

// // *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

//     class Animal {
//         constructor(name) {
//             this.name = name;
//         }
//         get name() {
//             return this._name;
//         }
//         set name(value) {
//             if(value.length === 0){
//                 console.log('Name Error!...')
//                 return;
//             }
//             this._name = value;
//         }
//         sayName() {
//             console.log(this.name.repeat(3))
//         }
//     }

//     let cat = new Animal('Tom');
//     cat.sayName();

//     function makeAClass(){
//         return class {
//             say() {
//                 console.log(sentence);
//             }
//         }
//     }

//     let sentence = makeAClass('Lorem Ipsum Dolar sit amet.')
//     new sentence().say()

//     class Article {
//         constructor(title, date) {
//             this.title = title;
//             this.date = date;
//         }
//         static compare(articleA, articleB){
//             return articleA.date - articleB.date;
//         }
//     }

//     let articles = [
//         new Article('HTML5', new Date(2018, 6, 13)),
//         new Article('CSS3', new Date(2018, 5, 15)),
//         new Article('ES6', new Date(2018, 4, 13))
//     ]

//     articles.sort(Article.compare)

// class Product {
//     constructor(id, name, price) {
//         this.id = id;
//         this.name = name;
//         this.price = price
//     }
//     makeDiscount(discount) {
//         this.discount = (price * (100 - discount) / 100)
//     }
//     print (id, name, price) {
//         return `product ID: ${id}, Name: ${name}, Price ${price}`
//     }
// }

// let car = new Product('BMW')
// console.log(car.print('10', 'bmw', '50000'))

// class MyArray extends Array {
//     isEmpty(){
//         return this.length === 0;
//     }
// }

// let myArr = new MyArray (1,2,3,4,5,6,7,8,9,10,20,30);
// console.log(`myArr.isEmpty() - ${myArr.isEmpty()}`)

// let filteredArr = myArr.filter(item => item >= 10)
// console.table(filteredArr)
// console.log(`filteredArr.isEmpty() - ${filteredArr.isEmpty()}`)


// console.log

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this._id = 10;
    }
    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;
    }
    get price(){
        return this._price;
    }
    set price(value){
        this._price = value;
    }

    get id(){
        return this._id;
    }

    makeDiscount(discount) {
        this.price = this.price-this.price*discount/100; 
    }

    print() {
        console.log(`id: ${this.id}, Name: ${this.name}, Price: ${this.price}`);
    }

    static compare(productA, productB){
        return productA.price - productB.price;
    }
}


let product = [
    new Product("Shoes", 20),
    new Product("Hat", 30),
    new Product("Shirt", 50),
];

product.sort(Product.compare);

product[0].price = 80;
product[0].makeDiscount(50);

class Book extends Product {
    constructor(name, price, pubDate, authors,) {
        super(name, price)
        this.authors = authors,
        this.pubDate = pubDate;
    }

    print() {
        super.print()
        console.log(`Authors: ${this.authors}, Publication Date: ${this.pubDate}`);
    }
}

let books = [
    new Book("Lord of the Rings", 20, "Tolkien", 1993),
    new Book("Harry Potter", 30, "Rowling", 1980),
    new Book("Samoseli Pirvlei", 40, "Dochanashvili", 1940)
]

books[0].print()
books[1].print()
books[2].print()
