//#region if

// let num = prompt("Enter a number");

// if ( num % 2 == 0) {
//     alert ("Even");
// }

// else {
//     alert ("Odd")
// }

// if (piroba) {
//      moqmedeba
//  }

//#endregion

//region wrong

// if ( !0 ) {
//     alert("false")
// }

// let x;
// if ( x = 5 ) {
//     alert("false")
// }
//endregion

//region accessallowed

// let accessAllowed;
// let age = prompt("age");
// if ( age  > 18) {
//     accessAllowed = true
// }

// else {
//     accessAllowed = false;
// }

// alert(accessAllowed)

// //let result = condition ? value_1 : value_2;

// accessAllowed = ( age > 18) ? true : false;
// accessAllowed = age > 18;
//endregion

//region davaleba
// let name = prompt("Who is there?", "")

// if (name == "admin") {
//     let password = prompt("password", "")

//     if (password == "themaster") {
//         alert("welcome")
//     }

//     else if (password == "" || password == null) {
//         alert("Canceled")
//     } 

//     else {
//         alert("Wrong Password")
//     }

// }


// else if (name == "" || name == null) {
//     alert("Canceled")
// }

// else {
//     alert("I don't know you")
// }

//endregion

//region clock
// let hour = 11;
// let minute = 44;

// if ( hour == 11 && minute == 44) {
//     alert ("Time is 11:44")
// }

// if ( 1 && 0 ) {
//     alert("won't work")
// }

//endregion

//region switch
// let a = 3;

// switch (a) {
//     default: 
//         alert ("default");
//     break;

//     case 3:
//         alert ("a = 3");
//     break;

//     case 4:
//         alert ("a = 4");
//     break;

//     case 5:
//         alert ("a = 5");
//     break;
//}
//endregion

//region number
// let number = Number( prompt("Sheiyvane ricxvi"))
// let noli = 0;

// while (number > 0) {
//     noli += number % 10;
//     number = (number-(number % 10)) / 10;
// }

// alert(noli)


// let num = Number ( prompt("Enter a number"))
// let sum = 0

// while ( num > 0) {
//     sum += num % 10;
//     num = parseInt (num / 10 );
// }
//endregion

// for (let i = 0; i < 10; i++) {
//     alert(i)
// }

// let min = Number ( prompt("Enter Minimum Number"))
// let max = Number ( prompt("Enter Maximum Number"))

// for (min; min<=max; min++ ) {
//     if (min % 2 == 0)
//     document.writeln(min + ",")
// }


let number = Number ( prompt ("Please enter a number"))
for (let i=0; i<number; i++) {
    for (let j=0; j<number; j++) {
        document.write("*")
    }
    document.write("<br>")
}