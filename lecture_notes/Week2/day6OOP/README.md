# OOP


## OOP

### ES5 traditional ways to create and manage objects and inheritance:

1. Object Literal easiest way to create a single object
```js
var person = {
  name: "Alice",
  greet: function() {
    console.log("Hello, I'm " + this.name);
  }
};
```

2. Factory Function (reusable object creation)
```js
function createPerson(name) {
  return {
    name: name,
    greet: function() {
      console.log("Hi, I'm " + name);
    }
  };
}

var person1 = createPerson("Bob");
```

3. Constructor Function + new (simulates classes)
This was the most common way to create reusable object "templates" in ES5.
```js
function Person(name) {
  this.name = name;
  this.greet = function() {
    console.log("Hi, I'm " + this.name);
  };
}

var person2 = new Person("Carol");
```

4. Using Prototypes
```js
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log("Hi, I'm " + this.name);
};

var person3 = new Person("Dave");
```

5. Object.create() prototype-based inheritance
```js
var animal = {
  speak: function() {
    console.log("Animal sound");
  }
};

var dog = Object.create(animal);
dog.bark = function() {
  console.log("Woof!");
};

dog.speak(); // inherited
dog.bark();  // own method
```

### ES6 Class syntax are just syntactic sugar over JS's existing prototype-based system
```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const p1 = new Person("Alice", 30);
p1.greet(); // "Hi, I'm Alice and I'm 30 years old."
```
syntactic sugar means it's a more readable and structured way of doing something that was already possible with functions and prototypes.

behind the scenes:
The constructor is a special method that runs when you create a new instance with new.
methods defined inside the class (greet) are actually stored on the prototype of the class, just like in es5.

```js
class Person {
  greet() { ... }
}
// is similar to 
function Person() {}
Person.prototype.greet = function() { ... };
```

Inheritance with extends and super
```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // calls Animal constructor
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Rex", "Labrador");
dog.speak(); // Rex barks.

```
extends sets up the prototype chain for inheritance.

super() calls the parent class's constructor (must be called before using this).

- A class is a blueprint or template for creating objects. It defines the structure (properties) and behavior (methods) that objects created from it will have.
- An instance is an actual object created from a class. It has real values and can be used in code.

- constructor & constructor function
  a function used to create and initialize objects
  in ES6 constructor() method inside class
  in ES5 it's a regular function used with new keyword
- Prototype methods
  methods that are not stored on each object instance, but instead on the prototype of the constructor function or class. This saves memory and enables inheritance
  All instances share prototype methods
- static 
  use 'static' keyword, methods attached directly to the class or constructor function, not to instances. call it on the class itself, not on an object created from the class


## Prototypes
  JavaScript uses prototype-based inheritance, objects can inherit properties and methods from other objects via their prototype.
- prototype chain / inheritance
Prototype Chain:
When you access a property or method on an object:
JS looks for it on the object itself.
If not found, it looks up the __proto__ (i.e. prototype) chain until it finds it or reaches the end (null).
 Inheritance is done by setting one object's prototype to another's. The prototype chain enables this lookup behavior.

- this keyword
this refers to the context in which a function is executed — basically, "who is calling the function?"

| How Function is Called      | What `this` Refers To                       |
| --------------------------- | ------------------------------------------- |
| As a method: `obj.method()` | `obj`                                       |
| Alone: `func()`             | `undefined` in strict mode, or `window` (global object)     |
| In constructor: `new Foo()` | The new object being created                |
| In arrow function           | `this` is **lexically bound** (from parent) |
| DOM event handler           | the DOM element                             |


## Function Prototypes
Imagine you borrow someone else’s car (this is the car), and you’re deciding how and when to drive it.

call → You borrow it and drive it immediately, giving directions one by one.

apply → You borrow and drive immediately, giving directions as a list.

bind → You take the keys (function) with the destination preset — and drive later.


- Call, apply, bind
They are methods available on all functions in JavaScript, used to manipulate this — i.e., the object the function should operate on.

1. call()
invokes a function with a custom this value and arguments passed individually
used to borrow methods or control context

Immediately calls a function, setting this to the first argument. Additional arguments are passed individually.
```js
function greet() {
  console.log(`Hi, I'm ${this.name}`);
}
const user = { name: "Alice" };
greet.call(user); // Hi, I'm Alice

```

2. apply()
same as call(), but takes arguments as an array
```js
function greet(age, city) {
  console.log(`${this.name} is ${age} from ${city}`);
}
const user = { name: "Bob" };
greet.apply(user, [25, "Paris"]); // Bob is 25 from Paris

```

3. bind()
return a new function with a permanently bound this
doesn't execute immediately
```js
const user = { name: "Charlie" };
function greet() {
  console.log(`Hi, I'm ${this.name}`);
}
const boundGreet = greet.bind(user);
boundGreet(); // Hi, I'm Charlie

```
Use bind() when you want to fix this context for later use, e.g., in event handlers or callbacks.
## Object prototypes and methods
- Entries, keys, values

1. Object.keys(obj)
Returns an array of keys 
```js
const obj = { a: 1, b: 2 };
console.log(Object.keys(obj)); // ['a', 'b']

```

2. Object.values(obj)
Returns an array of values from the object.
```js
const obj = { a: 1, b: 2 };
console.log(Object.values(obj)); // [1, 2]

```

3. Object.entries(obj)
Return an array of [key, value] pairs
```js
const obj = { a: 1, b: 2 };
console.log(Object.entries(obj)); // [['a', 1], ['b', 2]]
```


method vs function
all the method is function 
but if a function belongs to a object is a method