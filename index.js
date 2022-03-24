function callBack (language) {
    return `Learning ${language} is awesome!`
}

function receivesAFunction (callBack) {
    return callBack();
}

function returnsANamedFunction () {
    return receivesAFunction;
}

function returnsAnAnonymousFunction () {
 return function() {
     console.log (`Returning an anonymous function.`)
    };
}