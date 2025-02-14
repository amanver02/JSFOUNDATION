//Number

const { log } = require("console");
const { clearScreenDown } = require("readline");

let balance = 120;
let anotherbalance = new Number(120);

console.log(typeof balance);
console.log(anotherbalance);

let isActive = true;
let isReallyActive = new Boolean(true);

let firstname = null;
let lastname = undefined;
// console.log(firstname);
// console.log(lastname);
// string
let myString = "hello";
let myStringOne = "hola";
let username = "aman";

let oldGreet = myString + "hitesh";
console.log(oldGreet);

let greetMessage = `hello $ {username} !`;

let sm1 = Symbol("test");
let sm2 = Symbol("test");
console.log(sm1);
console.log(sm1 == sm2);