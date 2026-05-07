"use strict";
function greet3(name, age) {
    if (age != undefined) {
        return `Hello, ${name}. You are ${age} years old`;
    }
    else {
        return `Hello, ${name}.`;
    }
}
console.log(greet3("Alice"));
console.log(greet3("Bob", 30));
