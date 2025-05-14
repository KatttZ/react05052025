# Advanced Functions


## Function 
A function in JavaScript is a block of code that can be called by name. It can accept input parameters and return a value. 

function declaration === function definition 


### arrow function
ES6 feature, a shorter syntax for writing functions.
It does not have its own this, making it useful for callbacks and methods where you want to inherit the outer context

```js
const greet = name => `Hello, ${name}`;
```

### IIFE / anonymous function
Immediately Invoked Function Expression
A function that runs immediately after it is defined.
Useful for creating private scope and avoiding polluting the global environment
```js
(function() {
  const secret = "hidden";
  console.log("IIFE ran!");
})();
```

Anonymous function is a function without a name. 
Often used in places where the function is used on once, like callbacks

```js
setTimeout(function() {
  console.log("This is anonymous");
}, 1000);
```

### callback function
A function passed as an argument to another function to be executed later, usually after some event or task is done.
map(), forEach(), setTimeout()
```js
function greet(name, callback) {
  callback(`Hello, ${name}`);
}
greet("Alice", msg => console.log(msg));
```

### pure function
deterministic
It always return the same output for the same input
no side effects
doesn't change anything outside itself / no modifying global variables, DOM, file systems

### call stack


### Scope

-   Lexical Scoping
Functions are lexically scoped, meaning they remember the scope where they were defined, not where they are called.
```js
function outer() {
  let name = "Lexical";
  return function inner() {
    console.log(name); // Has access to outer’s variables
  };
}
```

-   Closure
Inner function has access to outer function’s variables
Can access the variables even after function has returned
Can create private variables
Examples: debounce, throttle, other higher order functions…
```js
function counter() {
  let count = 0;
  return function() {
    return ++count;
  };
}
const inc = counter();
inc(); // 1
inc(); // 2

```

### nested function / currying (0-7:34)
Nested function is a function defined inside another function
```js
function outer() {
  function inner() {
    console.log("Nested!");
  }
  inner();
}
```
Currying is a technique where takes arguments one at a time via chained calls
```js
function add(a) {
  return function(b) {
    return a + b;
  };
}
add(2)(3); // 5
```


### Higher order functions
Higher order function is a function that either:
    takes another function as an argument, or returns a function
    examples: map, filter, reduce
```js
function withLogging(fn) {
  return function(...args) {
    console.log("Calling function");
    return fn(...args);
  };
}
```
-   Debounce & throttle

Debounce
Limits execution by delaying function calls until after a pause (no rapid repeated calls).
Use case: search input, form validation.
```js
function debounce(fn, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}
```

Throttle
Limits function calls to only once every X milliseconds, no matter how many times it's triggered.
Use case: scroll or resize events.
```js 
function throttle(fn, interval) {
  let lastTime = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastTime >= interval) {
      lastTime = now;
      fn(...args);
    }
  };
}
```