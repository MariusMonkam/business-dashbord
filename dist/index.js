"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greetUser = exports.addNumbers = void 0;
// Define a function to add two numbers
function addNumbers(a, b) {
    return a + b;
}
exports.addNumbers = addNumbers;
// Define a function to greet a user
function greetUser(name) {
    return "Hello, ".concat(name, "!");
}
exports.greetUser = greetUser;
