class Error {
    constructor(message){
        this.message = message;
        this.name = "Error";
        // this.stack = 
    }
}

class ValidationError extends Error {
    constructor(message){
        super(message)
        this.name = "ValidationError"
    }
}

function validateJSON(json){
    let user = JSON.parse(json);
    if ( !user.age ){
        throw new ValidationError("No Field : age")
    }
    if( !user.isAdmin) {
        throw new ValidationError("No Field : isAdmin")
    }  
}

try {
    let user = validateJSON(json)
} catch (error) {
    if ( error instanceof ValidationError ){
        console.log(`Invalid data - ${error.message}`);
    }
    else if ( error instanceof SyntaxError ){
        console.log(`JSON Syntax Error - ${error.message}`);
    }
    else {
        throw error;
    }
}