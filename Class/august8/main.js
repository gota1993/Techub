let myStr = `Product $13
             Product $27
             Product $112`
            
let myRe = /[$0-9]+/g;
let result = myRe.exec(myStr)
let res = myStr.match(myRe)
console.log(result, res)

// let res = myStr.replace(myRe, 'number')

