let str = `Demo Str 145
            kfasdsad.
            asdsadsad.
            hello text`

let sentence = str.split('.').length - 1;
let words = str.split(" ").length
let numbers = str.replace(/[^0-9]/g,'').length
let lines = str.match(/\n/g).length
let letters = str.match(/[A-z]/g).length

console.log(`Sentence - ${sentence}, Words - ${words}, Numbers - ${numbers}, Lines - ${lines}, Letters - ${letters}`);