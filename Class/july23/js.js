// try {
//     console.log('Start of try');
//     undefinedVar;
//     console.log('End of try');
// }

// catch(error) {
//     console.log(`Error has occured: ${error}`);
// }

// finally {
//     console.log('Always ready to run')
// }

// let myPerson = {
//     name: 'JSON Guy',
//     id: 667,
//     isAdmin: true
// };

// let toSendData = [myPerson, myPerson, myPerson]
// //console.log(toSendData);
// let serialized = JSON.stringify(toSendData);
// //console.log(serialized)
// let unserialized = JSON.parse(serialized)
// //console.log(unserialized)

// let json = `{"name":"JSON Guy","id":667,"isAdmin":false}`

// try {
//     let data = JSON.parse(json)
//     if (!data.isAdmin) {
//         throw new SyntaxError("bla bla")
//     }
// }

// catch (error) {
//     if (error instanceof SyntaxError) {
//         console.log(`JSON Error - ${error}`)
//     }
//     else {
//         console.log(`oTher Error - ${error}`)
//     }
// }

class Error {
    constructor(message){
        this.message = message;
        this.name = "Error";
    }
}

class ValidationError extends Error {
    constructor(message){
        super(message)
        this.name = "ValidationError"
    }
}

class PropertyRequiredError extends ValidationError { 
    constructor (missingProp) {
        super(`No property - ${missingProp}`)
        this.name = 'PropertyRequiredError'
    }
} 
 
function readUser(json) { 
    let user = JSON.parse(json); 
    if (!user.age) { 
        throw new PropertyRequiredError("age"); 
    } 
    if (!user.name) { 
        throw new PropertyRequiredError("name"); 
    } 
    return user; 
}

try { 
    let user = readUser('{ "age": 25 }'); 
} catch (err) { 
    if (err instanceof ValidationError) { 
        alert("Invalid data: " + err.message); // Invalid data: No property: name 
        alert(err.name); // PropertyRequiredError 
        alert(err.missingProperty); // name 
    } else if (err instanceof SyntaxError) { 
        alert("JSON Syntax Error: " + err.message); 
    } else { 
        throw err; // unknown error, rethrow it 
    } 
} 