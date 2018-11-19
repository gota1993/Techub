`use strict`

// let user = new Object();

// 

// let user_2 = {} 
// user_2.name = "User 2"
// user_2.age = 30;

// user.isAdmin = true

// let user = new Object();
// Object.defineProperty(user, 'lastname', {
//     value: 'Doe',
//     writable: false,
//     configurable: false,
//     enumerable: false
// })
// console.log(user.lastname)
// user.lastname = "Smith"
// console.log(user.lastname)

// let user_2 = {} 
// Object.defineProperties (user_2, {
//     name: {value: 'Test', writable: false},let user = {
//     name: "John",
//     age: 33
// }
//     lastname: {value: 'Lastname', writable: false}
// })
// console.log(user_2.name, user_2.lastname)

// console.log(user.name, user['age'], user['isAdmin']);
// delete user.age;
// console.log(user.name, user['age'], user['isAdmin']);
// // console.log(user)
// let key = prompt("Enter Key:", "name");
// alert(user[key])

//#region დავალება1

    // let product = {} 

    // product.name = "Laptop"
    // product.price = 1200
    // product.price = 1000

    // console.log(product.name, product.price)
    // delete product.name

//#endregion

//#region car
    
    // let speed = 300;
    // let color = 'black';
    // let year = 2018;

    // let car = {
    //     speed,
    //     color,
    //     year,
    //     engine: 6.3
    // }

    // Object.defineProperty(car, 'speed', {
    //     value: speed,
    //     enumerable: false
    // })

    // console.log(car)
    // console.log('engine' in car) //ამოწმებს არის თუ არა ეს property ობიექტში

    // for (let key in car) {
    //     console.log(`key: ${key}, value: ${car[key]}`)
    // }

//#endregion

//#region დავალება2

    // let salaries = {
    //     John: 100,
    //     Ann: 160,
    //     Peter: 130,
    // }

    // let sum = 0

    // // let sum = salaries.John + salaries.Ann + salaries.Peter
    // // console.log (sum)

    // for (let key in salaries) {
    //     sum += salaries[key]
    // }

    // console.log (sum)

//#endregion

// const myConst = {
//     name: 'const'
// }

// myConst.new = 'new';
// console.log(myConst);

// let clone = Object.assign({}, user)
// console.log(user, clone)

// user.sayHi = function() {
//     alert('hello')
// }

// user.sayHi();
// user[`sayHi`]()


// function blaBlaBla() {
//     alert(this);
// }
// blaBlaBla()

// let userV2 = {
//     name: 'javascript',
//     sayHi(){
//         let func = () => alert(this.name);
//         func ()
//     }
// }

// userV2.sayHi();

//#region დავალება3

    // let calculator = {
    //     tve: 3,
    //     dge: 10,
    //     read() {
    //         alert(this.tve + "" + this.dge)
    //     },

    //     sum() {
    //         return this.tve + this.dge
    //     },

    //     mul() {
    //         return this.tve * this.dge
    //     }
    // } 

    // // calculator.read();
    // alert(calculator.sum());
    // alert(calculator.mul());

//#endregion

//#region დავალება4

    // let ladder = {
    //     step: 0,
    //     up() {
    //         this.step++;
    //         return this;
    //     },
    //     down() {
    //         this.step--;
    //         return this;
    //     },
    //     showStep: function () {
    //         alert(this.step)
    //     }
    // } 

    // ladder.up().up().down().showStep()


//#endregion

// function greet() {
//     alert(this.name)
// }

// function say(time, phrase) {
//     alert(`[${time}] ${this.name}: ${phrase}`);
// }

// let client = {name: 'client'}
// let admin = {name: `admin`}
// let john = {name: 'John'}

// greet.call(client)
// greet.call(admin)
// say.call(john, '10:00', 'Hello')

//*******სიმბოლოები***********
// let id = Symbol('id');
// let id1 = Symbol('id')

// console.log(id === id1)
// john[id] = 'ID Value'
// console.log(john[id])
// console.log(john)

// for (let key in john) {
//     console.log(key)
// }

// let customer = {
//     name: 'Super',
//     [id]: 140
// }

// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }

// let conUser = new User('new User')
// console.log(conUser)


// function Calculator() {
//     this.num1 = 5,
//     this.num2 = 10,

//     this.read = function () {
//         console.log(this.num1 + " " + this.num2)
//         },

//     this.sum = function () {
//         return this.num1 + this.num2
//         },

//     this.mul = function () {
//         return this.num1 * this.num2
//        }
// }

// let calculator = new Calculator ();

// calculator.read ();
// alert ("Sum = " + calculator.sum())
// alert ("Mul = " + calculator.mul())

//#region დავალება 5
    // function Accumulator(startingValue) {

    //     this.current = startingValue;
    //     this.read = function (){
    //         console.log (this.current += Number(prompt("enter number")))
            
    //     }
    // }

    // let ex = new Accumulator(10);

    // ex.read();
    // ex.read();
    // ex.read();
    // ex.read();

//#endregion

// let num = 5;
// let single = ' single'
// let double = ' double'
// let backticks = 'backticks'

// console.log('my ' + num + single)
// console.log('my ' + num + double)
// console.log(`js's ${num} "${single}"`)

// console.log(`\u00A9`)
// console.log(`\u{20331}`)


// 7// console.log('String'.length)
// console.log(str.charAt(2))
// console.log(str[0])

// for (let char of str) {
//     console.log(char)
// }

// str[0] = 'h';
// console.log(str)

// console.log('uppercase'.toUpperCase())
// console.log('LOWERCASE'.toLowerCase())
// console.log('uppercase'[0].toUpperCase())

// console.log(str.indexOf())

// let target = 'the';
// let pos = 0;

// while(true) {
//     let foundPos = str.indexOf(target, pos);
//     if ( foundPos == -1) break;
//     console.log(`Found at ${foundPos}`)
//     pos = foundPos + 1;
// }

//#region დავალება 6

function Calculator() {
    this.calculate = function (str) {
        return Number(str);
    }
    this.addOperator = function (name,func) {
        this.name = saxeli;
        
        this.addMethod = function (a,b) {
            console.log(this.name + (a * b))
        }    
    }


}

let calc = new Calculator();
result = calc.calculate(1 + 2)
alert(result)

let powerCalc = new Calculator ();

//#endregion