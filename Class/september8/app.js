// function add(n) {
//     let s = 0

//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             s += i * j
//         }
//     }
// }

// function recursiveCount(max, current) {
//     if (current > max) {
//         return
//     }
//     console.log(current)
//     recursiveCount(max, current + 1)
// }

// recursiveCount(10, 1)

// #region *************** fibanacci
// function fibanacci(n) {
//     if (n <= 2) {
//         return 1
//     } else {
//         return fibanacci(n - 1) + fibanacci(n - 2)
//     }
// }

// for (let i = 1; i < 12; i++) {
//     console.log(`i - ${i}, num - ${fibanacci(i)}`);
// }
//#endregion

// #region *************** factorial
// function factorial(n) {
//     if (n<2) return 1

//     return n * factorial(n-1)
// }

// console.log(factorial(1))
// console.log(factorial(2))
// console.log(factorial(3))
// console.log(factorial(4))
// console.log(factorial(5))
// #endregion

// #region *************** addNumbers

// function addNumbers(n) {
//     if (n === 0) return n
//     else {
//         return n + addNumbers(n - 1)
//     }
// }

// console.log(addNumbers(3))
// // 3 + addNumbers(2)
// // 3 + 2 + addNumbers(1)
// // 3 + 2 + 1

// function tailAddNumbers(n, sum = 0) {
//     if (n === 0) return sum
//     else {
//         return tailAddNumbers(n - 1, sum + n)
//     }
// }

// console.log(tailAddNumbers(3))
// // tailNumbers(3,0)
// // tailNumbers(2,3)
// // tailNumbers(1,5)
// // tailNumbers(0,6)

// #endregion

// #region *************** bubbleSort

// ვარიანტი 1
// let myArr = [5, 88, 2, 220, 55]

//     function bubbleSort(arr) {
//         for (let i = 0; i < arr.length; i++) {
//             for (let j = i+1; j < arr.length; j++) {
//                 if(arr[i] > arr[j]) { 
//                     let nn = arr[i]
//                     arr[i] = arr[j]
//                     arr[j] = nn
//                 }
//             }
//         }
//         return arr
//     }

//     console.log(bubbleSort(myArr))

//ვარიანტი 2

// function bubbleSort(numbers) {
//     do {
//         var isSorting = false;
//         for (let i = 0; i < numbers.length - 1; i++) {
//             if (numbers[i] > numbers[i + 1]) {
//                 // let t = numbers[i]
//                 // numbers[i] = numbers[i + 1]
//                 // numbers[i + 1] = t
//                 [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]]
//                 isSorting = true
//             }
//         }
//     }
//     while (isSorting)
// }

// let arr = [7, -3, 5, 80, 990, 14]
// bubbleSort(arr)
// console.log(arr)

// #endregion

// #region *************** InsertionSort

// function insertionSort(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = 0; j < i; j++) {
//             if (numbers[i] < numbers[j]) {
//                 let temp = numbers.splice(i, 1)
//                 numbers.splice(j, 0, temp[0])
//             }
//         }
//     }
// }

// let arr = [1,-1,3,2]

// insertionSort(arr)
// console.log(arr)

//#endregion

// #region *************** mergeSort
function mergeSort(numbers) {
    if (numbers.length < 2) {
        return numbers
    }

    const length = numbers.length
    const middle = Math.floor(length / 2)
    const left = numbers.slice(0, middle)
    const right = numbers.slice(middle)
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    const sortedArray = []

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            sortedArray.push(left.shift())
        } else {
            sortedArray.push(right.shift())
        }
    }
    return sortedArray.concat(left, right)
}

let arr = [-7, -3, 5, 8, 10, -1, 2]
console.log(mergeSort(arr))
// #endregion