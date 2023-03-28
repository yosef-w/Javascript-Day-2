console.log('Hello it is Brian from functions.js');

/*
    JavaScript Functions
*/


// Function Declaration
// Syntax: function funcName(){ code to execute when called }

// Define the function
function addNums(){
    let num1 = 10;
    let num2 = 20;
    return num1 + num2;
};

console.log(addNums);

// Execute a function
// funcName();
console.log(addNums());


// Function Declaration with Parameters
// Syntax: function funcName(param1, param2, etc.){ code to execute when called }

function addNums2(num1, num2){
    console.log(num1, num2)
    return num1 + num2;
};

console.log(addNums2);

// Execute with parameters:
// funcName(arg1, arg2, etc.)
console.log(addNums2(15, 30));

// Calling a function without the arguments will set the param values to undefined
// as opposed to throwing a TypeError like in Python
console.log(addNums2()); // return NaN because num1 and num2 are undefined

// Take exercise 1 from last night and put it in a function

function fizzBuzz(numbers){
    for (let num of numbers){
        if (num % 3 === 0 && num % 5 === 0){
            console.log('FizzBuzz')
        } else if ( num % 3 === 0){
            console.log('Fizz')
        } else if (num % 5 === 0) {
            console.log('Buzz')
        } else {
            console.log(num);
        };
    };
};

fizzBuzz([20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]);


// Default Parameters
// Syntax: function funcName(param1, param2=defaultValue){ code to execute }

function addNums3(num1, num2=100){
    return num1 + num2
};

console.log(addNums3(50)); // num1 is 50 and num2 defaults to 100
console.log(addNums3(50, 25)); // num1 is 50 and num2 is 25

// Use rest parameter (...paramName) to accept optional arguments
function acceptAll(first, ...others){
    console.log(`First: ${first}`);
    console.log(`Others:`, others)
};

acceptAll('a', 'b', 'c', 'd', 'e');


function sumValues(x, ...values){
    let total = x;
    for (let val of values){
        total += val;
    };
    return total;
};

console.log(sumValues(10, 23, 55, 23, 64, 23));

function sumArr(arr){
    let total = 0;
    for (let num of arr){
        total += num;
    };
    return total;
};

console.log(sumArr([10, 23, 55, 23, 64, 23]));


// Function Expressions
// var (let, const) nameOfVariable = function(){ code to execute }

var addSomeNums = function abc(){
    let num1 = 100;
    let num2 = 200;
    return num1 + num2;
};


console.log(addSomeNums);
console.log(addSomeNums());


let addMoreNums = function(num1, num2){
    return num1 + num2;
};

console.log(addMoreNums);
console.log(addMoreNums(10, 30));


// Arrow Function Expression
// Syntax: () => { code to execute }
// Syntax: (param1, param2, etc.) => { code to execute }
// Syntax: param1 => { code to execute }
// Syntax: param1 => code to execute in one line return

var myFirstArrowFunction = () => {};
console.log(myFirstArrowFunction);
console.log(typeof myFirstArrowFunction);

// Function to subtract numbers
function subNums(num1, num2){
    return num2 - num1;
};

// Convert to an arrow function - remove function keywork and replace with arrow
// between the (params) and { code }

var subNumsArrow = (num1, num2) => {
    return num2 - num1;
};

console.log(subNumsArrow(3, 35));

// If { code to execute } is one line with only a return, you can remove {} and return
var subNumsArrow2 = (num1, num2) => num2 - num1;

console.log(subNumsArrow2(44, 100));

// If you have one and only one parameter, you do not need the parens()
var addTen = num => num + 10;

console.log(addTen(30));

// function addTen(num){
//     return num + 10
// }

let colors = ['red', 'orange', 'yellow', 'blue'];

function makeUpperCase(word){
    return word.toUpperCase();
};

console.log(colors.map(makeUpperCase));

console.log(colors.map( word => word.toUpperCase() ));


// One line return - If you are returning an object, put parentheses around object

function createObject(x, y){
    return {
        a: x,
        b: y
    };
};

let myObj = createObject('hello', 'world');
console.log(myObj);


var buildObject = (x, y) => ({ a: x, b: y});

let myObj2 = buildObject('hello', 'world');
console.log(myObj2);

// Ternary Operator
// (condition) ? value if True : value if False

let randomNum = 5;

let value = (randomNum > 10) ? 'Top Half' : 'Bottom Half';

console.log(value);

// Ternary + Arrow Function

var evenOrOdd = number => (number % 2 === 0) ? 'Even' : 'Odd';

console.log(evenOrOdd(10));
console.log(evenOrOdd(15));
console.log(evenOrOdd(34));
console.log(evenOrOdd(79));