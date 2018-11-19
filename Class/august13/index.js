let regEx = new RegExp('abcd') // new RegExp(pattern, flags)
let regEx2 = /abcd/ // /patters/flags

// test(), exec()

let sourceStr = 'Hello RegExp Hello Hello'
let helloRegEx = /Hello/gi
let chSet = /[ts]ell/i
// let result = helloRegEx.test(sourceStr)
// let result2 = helloRegEx.exec(sourceStr)
// console.log(result)
// console.log(result2)
let str = 'Sell'

// console.log(chSet.test(str))

// console.log(/a{2,5}/i.test('aaaaaaa'))

// ნებისმიერი 10-ნიშნა რიცხვი

console.log(/^\d{10}$/.test('9999999999'))

