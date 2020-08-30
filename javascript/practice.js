console.log('hello');
//alert('YO!')

var b = 'smoothie';
console.log(b);

var someNumber = 45;
console.log(someNumber)


//var age = prompt('What is your age?');

//document.getElementById('someText').innerHTML = age;

// Numbers in Javascript
var num1 = 10;
console.log(num1)

// Increment num1 by 1
num1++;
console.log(num1)

// Decrement bum1 by 1
num1--;
console.log(num1)


/* Functions
1. Create a function
2. Call a function
*/

//Create
function fun() {
    console.log('This is a function');
}

//Call
fun();


// Create function that takes in you name and returns it with hello yourname
function greeting(yourName) {
   
    var result = 'Hello ' + yourName;
    console.log(result)
}
// var name = prompt('What is your name?');
// greeting(name);


// add 2 numbers in a functions
function sumNumbers(num1, num2){
    var result = num1 + num2;
    console.log(result)
}

sumNumbers(10, 10)
sumNumbers('Hello', ' Man')
sumNumbers('10', '10')
sumNumbers('10', 10)


function sayHello() {
    document.write('<h1>This is Javascript Baby!</h1>');
}

sayHello();

// Function to get area
function getArea(width, height) {
    return width * height;
}

console.log(getArea(5, 10));
console.log(getArea(20, 10));
wallWidth = 7;
wallHeight = 10;

console.log(getArea(wallWidth, wallHeight));

function calulateArea(width, height) {
    return area = width * height;
}

var wallOneArea = calulateArea(3, 5);
var wallTwoArea = calulateArea(8, 5);

document.write(wallOneArea + '<br />');
document.write(wallTwoArea + '<br />');

// While loops
var num = 0;

while (num < 10) {
    num += 1;
    document.write(num + '<br />');
} 

for (let num = 0; num <= 10; num++) {
    console.log(num);
}

// Data types
let yourAge = 18;                               // number
let yourName = 'Bob';                           // string
let name = {first: 'Jane', last: 'Doe'};          // object
let truth = false;                              // Boolean
let groceries = ['apple', 'banana', 'oranges']; // array
let random;                                     // undefined
let nothing = null;                             // value null

console.log(name)

// Strings in Javascript (common methods)
let fruit = 'banana';
let moreFruits = 'banana\napple';
console.log(moreFruits);

console.log(fruit.length);
console.log(fruit.indexOf('n'));
console.log(fruit.slice(2,4));
console.log(fruit.slice(2,6));
console.log(fruit.replace("ban", '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
let alot_Fruits = 'banana,apple,cherry,grape,lemon';
console.log(alot_Fruits.split(','));

// Array
var fruits = ['banana', 'apple', 'orange', 'pineapples'];
var fruits = new Array('banana', 'apple', 'orange', 'pineapples')

console.log(fruits[2])
fruits[0] = 'pear';
console.log(fruits)


// Loop trhough array
for (i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

var i = 0;
while ( i < fruits.length) {
    console.log(fruits[i]);
    i++;
}