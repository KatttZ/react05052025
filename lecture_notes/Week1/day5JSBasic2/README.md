# JS Basics 2


## Data structures

Arrays & Objects

Array Fundamental: 
store multiple values under a single variable, in a contiguous memory location
ordered, access element by index,
```js
const a = ['A', 'B', 'C']
array.push // return the new length of the array
array.pop // return the removed element
array.shift  // removes first element and return the removed element
array.unshift // add element to beginning of array and return the new length of the array
 
Array.isArray(a)  // check whether the passed value is an Array

```

<hr>
Object Fundamental:
a collection of related properties and / or methods 
can represent real world objects ( people, products, places)
object = {key: value, function()}


```js
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true,
    sayHello: function(){
        console.log(`Hi! I am ${this.firstName}`)
    }
    eat: () => {
        console.log('I am eating roast beef')
    }
}

person.sayHello() // Hi! I am John

```


<hr>

-   array methods
        forEach, map, filter, find, reduce
    
```js
// filter: creates a shallow copy of a portion of a given array
const words = ["spray", "elite", "exuberant", "destruction", "present"];

const filteredItems = words.filter((word) => word.length > 6);

console.log(filteredItems;) // Expected output: Array ["exuberant", "destruction", "present"]


// map: creates a new array populated with teh results of calling a provided function on every element in the calling array

const array1 = [1, 4, 9, 16]

const map1 = array1.map(num => num * 2);

console.log(map1) // Expect output: Array [2, 8, 18, 32]

// forEach: executes a provided function once for each array element
array1.forEach(ele => console.log(ele)); // 1, 4, 9, 16

// find: return the first element in the array that satisfies the provided testing function, if no values found return undefined
const array2 = [5, 12, 8, 130, 44];
const found = array2.find(ele=> ele > 10);
console.log(found) // output: 12


// reduce: run cb function on each element, return a single value

// The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

const array3 = [1, 2, 3, 4]
// 0 + 1 + 2 + 3 + 4;
const initialVal = 0;
const sumWithInitial = array3.reduce((acc, currVal) => acc + currVal, initialVal)

console.log(sumWithInitial) // output: 10

// some: return true if find at least one element pass the condition, otherwise false
console.log(array3.some(ele => ele%2 === 0))  // true

// every: test whether all elements pass the test, return boolean value
console.log(array3.every(ele => ele > 2)) // false

// includes: determines whether an array includes a certain value, return boolean value
console.log(array3.includes(2)) // true

```


-   destructure & spread & rest operator

Destructuring exact values from arrays or properties form objects and assign them to a variable.

```js
const [a, b] = array;
const [a, , b] = array;
const [a = aDefault, b] = array;
const [a, b, ...rest] = array;
const [a, , b, ...rest] = array;
const [a, b, ...{ pop, push }] = array;
const [a, b, ...[c, d]] = array;

const { a, b } = obj;
const { a: a1, b: b1 } = obj;
const { a: a1 = aDefault, b = bDefault } = obj;
const { a, b, ...rest } = obj;
const { a: a1, b: b1, ...rest } = obj;
const { [key]: a } = obj;

```

-   shallow vs deep copy

shallow copy:
    with spread operator 
    with Object.assign()  tArray = Object.assign([], zArray)

nested structural data types still share a reference!!
 so change to the shallow copy will mutate the original array

Array.from() and slice() create shallow copies too

```js
//function to create deep copy

const deepClone = obj => {
    if(typeof obj !== 'object' || obj === null) return obj;

    //create an array or object to hold the values
    const newObject = Array.isArray(obj)? [] : {};

    for(let key in obj){
        const value = obj[key];

        newObject[key] = deepClone(value);
    }

    return newObject;
}
```

-   optional chaining (?.)
allow us safely accesses an object's property or calls a function without causing an error 
if something along the way is undefined or null. evaluates to undefined instead of throwing an error.

```js
// without optional chaining
const user = {};
console.log(user.profile.name); // ❌ Error: Cannot read 'name' of undefined

// with optional chaining
const user = {};
console.log(user.profile?.name); // ✅ undefined (no error)
```
Where you can use it:
Accessing properties: obj?.prop

Accessing array elements: arr?.[index]

Calling functions: func?.()


-   Optional
    -   Map, Set, JSON

Map is like a special object that stores key-value pairs, but with more flexibility.
Map can use any type of key, even objects or function
Map remember the order in which the items are added.
```js
const map = new Map();
map.set('name', 'Alice');
map.set(42, 'age');
map.set({ id: 1 }, 'objectKey');

console.log(map.get('name')); // "Alice"

```

Set is a collection that stores unique values only
doesn't care about order, just uniqueness
great for removing duplicates from arrays or tracking unique items.

```js
const set = new Set();
set.add('apple');
set.add('banana');
set.add('apple'); // won't be added again

console.log(set.size); // 2

```

JSOn stands for JavaScript Object Notation
It's a way to store and send data as text, especially between servers and web apps.
use JSON.stringify() to convert an object to JSON text
use JSON.parse() to turn JSON text back into an object

```js
const obj = { name: 'Bob', age: 30 };
const jsonStr = JSON.stringify(obj); // '{"name":"Bob","age":30}'
const backToObj = JSON.parse(jsonStr); // { name: 'Bob', age: 30 }

```


## Operators
-   Ternary / conditional operators
a shortcut to if{} and else{} statement
helps to assign a variable based on a condition

condition ? codeIfTrue : codeIfFalse;

```js
let age = 21;
let message = age > 18 ? "You're an adult" : "You're a minor";
```

-   Logical and / logical or
used to combine or manipulate boolean values (true or false)
AND = && 
OR = ||
NOT = !



## Function basics

A function in JavaScript is a block of code that can be called by name. It can accept input parameters and return a value.

The return statement in JavaScript specifies the value to be returned by a function. It also exits the function, preventing any further code from being executed.

## Must Know
traverse an array
