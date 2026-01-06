let text = "ABCDEFGHIJKLMNOPQRSTUVWZ";
let length = text.length;
console.log(length)

let text1 = "HELLO WORLD";
let char = text1.charAt(0);
console.log(char)

const name = "W3Schools";
let letter = name.at(2);
console.log(letter)

let text4 = "Hello";
let text2 = "World";
let text3 = text4.concat(" ", text2);
console.log(text3)

let text5 = "Apple, Banana, Kiwi";
let part = text5.slice(7, 13);
console.log(part)

let text6 = "Apple, Banana, Kiwi";
let part1 = text6.slice(7);
console.log(part1)

let text7 = "Hello World!";
let text8 = text1.toUpperCase();
console.log(text8)

let text9 = "Hello World!";
let text10 = text1.toLowerCase();
console.log(text10)

let text11 = "      Hey hi!      ";
let text12 = text11.trim();
console.log(text12)

let text13 = "     Hello World!     ";
let text14 = text13.trimStart();
console.log(text14)

let text15 = "Hello world!";
let result = text15.repeat(2);
console.log(result)

let x = 123;
x.toString();
console.log((123).toString());
console.log(x)

let y = 9.656;
console.log(y.toFixed(0));

let z = 9.656;
console.log(z.toFixed(2));

console.log(Number.isInteger(10));
console.log(Number.isInteger("10"));
console.log(Number.parseFloat("10.33"));