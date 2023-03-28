console.log('Happy Tuesday!');

/*
    Array Methods!
    Some of the more popular array methods
*/

// Create an array with which to work
let names = ['Kevin', 'Danny', 'Emily', 'Margaret', 'Larry', 'Barry'];

// Basic looping - for...of

for (let name of names){
    console.log(name);
};

console.log('================================');

// Array.prototype.forEach(callbackFn)
names.forEach(element => console.log(element));

console.log('================================');

// Callback Function
function logInfo(element, idx, arr){
    console.log(element, idx, arr);
};

names.forEach(logInfo);

// names.forEach((e, i, a) => {
//     names.push(e);
//     console.log(a);
// });
console.log(names);

names.forEach((el, ix) => console.log(ix));

console.log('================================');

function getFirstLetter(word){
    return word[0]
}

names.forEach(getFirstLetter);

// Array.prototype.map(callbackFn)
// Creates a new array with the return values of the callbackFn applied to each element

let firstLetters = names.map(getFirstLetter);
console.log(firstLetters);


function mapCallBack(el, ix){
    if (ix % 2 === 0){
        return el.toUpperCase()
    } else {
        return el.toLowerCase()
    }
}

let newNames = names.map(mapCallBack);
console.log(newNames);

console.log(names);

// As an arrow function
let newerNames = names.map((e, i) => i%2===0 ? e.toUpperCase() : e.toLowerCase() );
console.log(newerNames);

console.clear();

// Array.prototype.filter(callbackFn)
// Filter out the elements that return a falsy value when callbackFn is applied

let cities = ['Chicago', 'Boston', 'New York', 'Baton Rouge', 'Baltimore', 'Cheyenne', 'San Francisco']

console.log(cities);

function startsWithC(city){
    return city[0].toUpperCase() === 'C';
};

console.log(cities.map(startsWithC));

let cNameCities = cities.filter(startsWithC);
console.log(cNameCities);

// Arrow Function
let bNameCities = cities.filter(city => city[0].toUpperCase() === 'B');
console.log(bNameCities);

// filter creates a shallow copy - a copy whose properties share the same references (point to the same underlying values) as the source
let testArr = [{a: 1, b: 2}, {a: 1, b: 3}, {a: 2, b: 4}]

let filteredArr = testArr.filter(obj => obj.a === 1);
console.log(filteredArr);
console.log(testArr[0] === filteredArr[0]);
console.log(testArr[0]);
testArr[0].b = 10000;
console.log(filteredArr);

// filter takes the boolean value of the return
// all values are truthy except false, 0, -0, 0n, "", null, undefined, and NaN

let randomMapArr = cities.map(city => city.length > 8 ? 'Hello World' : '')
console.log(randomMapArr);
let randomFilterArr = cities.filter(city => city.length > 8 ? 'Hello World' : '')
console.log(randomFilterArr);

// Array.prototype.concat()
let arrA = [1, 2, 3];
let arrB = [4, 5, 6];

// let arrC = arrA + arrB;
// console.log(arrC);
// console.log(typeof arrC);

let arrC = arrA.concat(arrB);
console.log(arrC);
console.log(typeof arrC);

let arrD = arrA.concat(arrB, arrC);
console.log(arrD);

// Array.protoype.includes()
let fruits = ['orange', 'apple', 'banana', 'strawberry', 'pear', 'watermelon', 'apple'];
console.log(fruits);

console.log(fruits.includes('strawberry')); // .includes will check if the element is in the array
console.log(fruits.includes('mango'));
console.log('apple' in fruits); // in operator - check to see if the object has that property
console.log('2' in fruits);

// Array.prototype.indexOf()
console.log(fruits.indexOf('watermelon'));
console.log(fruits.indexOf('mango'));
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('apple', 2));

// Array.prototype.join()
let myNameArr = ['B', 'r', 'i', 'a', 'n'];
console.log(myNameArr.join());
console.log(myNameArr.join(''));
console.log(myNameArr.join('-'));

// Array.prototype.push() -- equivalent to the list.append in Python
console.log(fruits.push('mango'));
console.log(fruits);

fruits.push('pineapple', 'blueberry', 'tomato');
console.log(fruits);

// Array.prototype.pop()
const lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits);

// Array.prototype.reverse()
// In Place!

console.log(cities);
cities.reverse();
console.log(cities);
cities.reverse();
console.log(cities);


// Array.prototype.slice()
console.log('Array Slice:')
console.log(fruits);
console.log(fruits.slice()); // fruits[:] in python
console.log(fruits.slice(3)); // fruits[3:] in python
console.log(fruits.slice(3,7)); // fruits[3:7] in python
console.log(fruits.slice(0, 6)); // fruits[:6] in python
console.log(fruits.slice(0, -3)); // fruits[:-3] in python

console.clear();
// Array.prototype.splice()
console.log('Array Splice:')
console.log(fruits);
fruits.splice(2, 3, 'kiwi', 'grapefruit');
console.log(fruits);


// Array.prototype.sort()
fruits.sort();
console.log(fruits);

let unsorted = [23, -1, 10, 3, 5, -7, 18, 100, 5];
console.log(unsorted);
unsorted.sort();
console.log(unsorted);

let newUnsorted = [9, 70, 61, 5, 8, -40, -5];
console.log(newUnsorted);

function compareFunction(a, b){
    console.log('A:', a, 'B:', b)
    if (a > b){
        return 1
    } else if (a < b){
        return -1
    } else {
        return 0
    }
}

newUnsorted.sort(compareFunction);
console.log(newUnsorted);

// To sort by number value
let anotherUnsorted = [23, 32, 2, 34, 56, 21, 4, 66];
console.log(anotherUnsorted);
anotherUnsorted.sort( (a, b) => a - b)
console.log(anotherUnsorted);

let users = [
    {
        first: 'Brian',
        last: 'Stanton'
    },
    {
        first: 'Michael',
        last: 'Jordan'
    },
    {
        first: 'Matt',
        last: 'Groening'
    },
    {
        first: 'Homer',
        last: 'Simpson'
    },
    {
        first: 'James',
        last: 'Smith'
    }
];

users.sort( (a, b) => a.last > b.last ? 1 : -1)
console.log(users);