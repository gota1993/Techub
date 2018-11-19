// getName();

// function getName() {
//     alert("Name");
// }

// let getNameV2 = function () {
//     alert("NameV2");
// }

// function showMessage(from, text) {
//     from = `* ${from} *` ;
//     alert(`${from}: ${text}`)
// }

// let from = 'John'
// showMessage(from, 'Hello')

// alert(from); // => John

// getNameV2(); 


// function sum(x, y) {
//     return x + y;
// }

// let result = sum(5, 8)

// function checkMovie (age) {
//     if (age < 18) return

//     alert ("Access Granted..!")
// }

// checkMovie(21)
// console.log(result)

// function pow(x,n) {
//     let result = x;
  
//     for (let i = 1; i < n; i++) {
//       result *= x;
//     }
  
//     return result;
//   }
  
//   let x = prompt("enter number");
//   let n = prompt("unter pow");
  
//   if (n < 1 && n % 1 === 0) {
//     alert(`sheiyvane ertze meti`);
//   } 
  
//   else {
//     alert( pow(x, n) );
//   }



// return number + pow

// let num = prompt("enter")

// function isPrime(n) {
   
//   }
  
function isPrime(n) {
    let number = Math.round(n);
    for(let i=2; i<number; i++) {
        if(number % i == 0) return false;
    }
    return true;
 }
 
 x=prompt('shemoitane');
 console.log(isPrime(x));
 
 function showPrimes(y) {
    for(i=2; i<y; i++) {
        if(isPrime(i)) {
            document.writeln(i);
        }
    }
 }
 
 showPrimes(x);
 
 function ask(question, yes, no) {
    if(confirm(question)) {
        yes();
    } else {
        no();
    }
 }