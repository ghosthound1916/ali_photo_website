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

