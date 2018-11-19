// function defaultParams (x,y) {
//     return x * y;
// }

// console.log(defaultParams(5))

// function checkAge (age, granted, denied) {
//     if (age < 18) denied ();
//     else granted();
// }

// let age = prompt("What is your age?", 18)


// function grandAccess () {
//     alert('Access granted');
// }

// function denyAccess () {
//     alert('Access denied');
// }

// checkAge (age, grantAccess, denyAccess)

// let grantAccess = () => alert('Access granted')
// let denyAccess = () => alert('Access denied')

// checkAge (age, grantAccess, denyAccess)

// *******მასივები*********

// let years = new Array(10);
// let years2 = [10];

// console.log(years.length);
// years.length = 5
// console.log(years.length);


// console.log(years2.length);

// let fruits = ["Apple", "Banana", "Cherry",];

// console.log(fruits)
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])

// fruits[2] = "Lemon"
// console.log(fruits)

// let arr = ["Apple", { name:"John"}, true, () => { alert("Hello from array") }]
// console.log(arr)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[1].name)
// console.log(arr[2])
// console.log(arr[3])
// arr[3]();

//let numbers = [];
// LIFO
// push / pop

//numbers.push(1)
//numbers.push(3)
//numbers.push(8)
//numbers.push(13)
// console.log(numbers);
// let removed = numbers.pop();

// console.log(removed)
// console.log(`removed: ${removed}`)
// console.log(numbers)
// numbers.length = 0;
// console.log(numbers)

// // FIFO
// // shift / unshift

// numbers.unshift(1)
// numbers.unshift(3)
// numbers.unshift(8)
// numbers.unshift(13)

// console.log(numbers)
// removed = numbers.shift();
// console.log(`removed ${removed}`);
// console.log(numbers)

//let n = numbers;
// console.log(n);
// console.log(n === numbers)
//n.push(33);
// numbers.push(33);
// console.log(numbers)

// let clone = Object.assign({}, numbers);
//let clone = numbers.slice();
//clone.push(64);
// console.log(clone);

//clone.age = 11;
// console.log(clone);
// console.log(clone[5]);

//for ( let index = 0; index < numbers.length; index += 1) {
//console.log(numbers[index])
//}

//for (number of numbers) {
//console.log(number)
//}

//for (key in object)
//for (number in numbers) {
//console.log(numbers[number])
//}

// console.log(numbers.toString())
// console.log(numbers.join(" "))
// console.log(numbers.join("-"))

// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ]

// console.log(matrix[0][1])


function sumInput() {
    let i = true;
    let mas = [];
    while (i) {
        let number = prompt('shemoitane');
        if (number !== "" && number !== null && isNaN(number) == false) {
            mas.push(Number(number));
        } else {
            let sum = 0;
            for (let index = 0; index < mas.length; index++) {
                sum += mas[index];
            }
            console.log(sum);

            i = false;
        }
    }
}

sumInput();

for (let i = 0; i < document.body.childNodes.length; i += 1) {
    //console.log(document.body.childNodes[i])
}



// DOM
// DOM Tree
// console.log(document);
// console.log(ducument.documentElement);
//console.log(document.body);
//console.log(document.head);
//childNodes, firstChild, lastChild



// Write the function sumInput() that:
// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// Calculates and returns the sum of array items.
// P.S. A zero 0 is a valid number, please don’t stop the input on zero.