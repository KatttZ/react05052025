# What is typescript
everything works in js will works in ts
any .js file can be renamed to .ts and it will work


Superset of JS
Dynamic typing to static typing
Type safety / more confident/good for large projects
Initially takes longer to develop, but makes long-term development faster

TypeScript is a superset of JavaScript, it adds extra features, especially static typing, on top of regular JavaScript. This means you can define what type of data(like number, string, etc.) your variables and functions should use.
It helps catch bugs early and makes your code easier to understand and maintain, especially in large projects. While it might take more time to write at first, it usually speeds up development in the long run by preventing errors and improving code quality.

## What are generics in TypeScript

Create reusable components/functions that work with multiple types

Generics let you write reusable functions or components that work with any type, while still keeping type safety.
Instead of hardcoding specific types, you can use a placeholder(like <T>) so your code stay flexible and avoids duplication.
function identity<T>(value: T): T {
  return value;
}
This fun


## Primitive Types
These are the basic data types in TypeScript (same as JavaScript), like:

string – text ("hello")

number – numbers (42)

boolean – true/false (true)

null and undefined

bigint – for large integers

symbol – for unique identifiers

```ts
let name: string = "Kat";
let age: number = 25;
let isOnline: boolean = true;
```

## Function Types
You can define the type of a function: what parameters it takes and what it returns.

```ts
function add(a: number, b: number): number {
  return a + b;
}

const greet: (name: string) => string = (name) => `Hello, ${name}`;

```

## Types and Interfaces
Both are used to define the shape of objects.

- type can define unions, primitives, and more.

- interface is mainly used for objects and supports extension.

```ts
type User = {
  name: string;
  age: number;
};

interface Product {
  title: string;
  price: number;
}

```
You can often use them interchangeably, but interfaces are better for extending objects.

## Union & Intersection
- Union (|): value can be one of multiple types.

- Intersection (&): value must satisfy all combined types.

```ts
// Union
let input: string | number;
input = "hello";
input = 42;

// Intersection
type A = { name: string };
type B = { age: number };
type C = A & B; // must have both name and age

```

## Generics
Generics let you write flexible, reusable code that still checks types.

```ts
function identity<T>(value: T): T {
  return value;
}

identity<number>(10);       // returns 10
identity<string>("hello");  // returns "hello"

```
Useful for arrays, functions, and components where the type can vary.

## CheatSheet
```ts
// ===== BASIC TYPES =====

// Primitive types
let username: string = "john_doe";
let userId: number = 12345;
let isActive: boolean = true;
let data: any = { anything: "goes here" }; // Avoid when possible

// Arrays
let numbers: number[] = [1, 2, 3, 4];
let names: Array<string> = ["Alice", "Bob", "Charlie"];
let mixed: (string | number)[] = ["hello", 42, "world"];

// Tuples (fixed-length arrays with specific types)
let coordinate: [number, number] = [10, 20];
let nameAge: [string, number] = ["Alice", 30];

// ===== FUNCTIONS =====

// Function with typed parameters and return type
function add(a: number, b: number): number {
    return a + b;
}

// Optional parameters
function greet(name: string, greeting?: string): string {
    return `${greeting || "Hello"}, ${name}!`;
}

// Default parameters
function createUser(name: string, role: string = "user"): void {
    console.log(`Creating ${role}: ${name}`);
}

// Arrow functions
const multiply = (x: number, y: number): number => x * y;

// Function that returns a function
function createCounter(): () => number {
    let count = 0;
    return () => ++count;
}

// ===== OBJECTS AND INTERFACES =====

// Interface for objects
interface User {
    id: number;
    name: string;
    email: string;
    isAdmin?: boolean; // Optional property
}

const user: User = {
    id: 1,
    name: "Alice",
    email: "alice@example.com"
};

// Interface with methods
interface Calculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
}

const calc: Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
};

// Extending interfaces
interface AdminUser extends User {
    permissions: string[];
}

const admin: AdminUser = {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    isAdmin: true,
    permissions: ["read", "write", "delete"]
};

// ===== CLASSES =====

class Animal {
    protected name: string; // protected = accessible in class and subclasses
    private age: number;    // private = only accessible in this class
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    
    public speak(): string {
        return `${this.name} makes a sound`;
    }
    
    getAge(): number {
        return this.age;
    }
}

class Dog extends Animal {
    private breed: string;
    
    constructor(name: string, age: number, breed: string) {
        super(name, age);
        this.breed = breed;
    }
    
    speak(): string {
        return `${this.name} barks!`;
    }
    
    getBreed(): string {
        return this.breed;
    }
}

// ===== UNION TYPES =====

// Variable can be one of several types
let id: string | number;
id = "user123";
id = 12345;

// Function with union type parameter
function formatId(id: string | number): string {
    if (typeof id === "string") {
        return id.toUpperCase();
    }
    return id.toString();
}

// ===== TYPE ALIASES =====

// Create reusable type definitions
type Status = "pending" | "completed" | "failed";
type EventHandler = (event: string) => void;

interface Task {
    id: number;
    title: string;
    status: Status;
}

const task: Task = {
    id: 1,
    title: "Learn TypeScript",
    status: "pending"
};

// ===== GENERICS =====

// Generic function - works with any type
function identity<T>(arg: T): T {
    return arg;
}

const stringValue = identity<string>("hello");
const numberValue = identity<number>(42);

// Generic interface
interface Container<T> {
    value: T;
    display(): string;
}

class Box<T> implements Container<T> {
    constructor(public value: T) {}
    
    display(): string {
        return `Box contains: ${this.value}`;
    }
}

const stringBox = new Box<string>("TypeScript");
const numberBox = new Box<number>(100);

// ===== PRACTICAL EXAMPLES =====

// API Response typing
interface ApiResponse<T> {
    data: T;
    success: boolean;
    message?: string;
}

interface Post {
    id: number;
    title: string;
    content: string;
    authorId: number;
}

// Async function with typed response
async function fetchPost(id: number): Promise<ApiResponse<Post>> {
    // Simulated API call
    return {
        data: {
            id,
            title: "Sample Post",
            content: "This is a sample post content",
            authorId: 1
        },
        success: true
    };
}

// Event handling
interface ButtonProps {
    label: string;
    onClick: (event: MouseEvent) => void;
    disabled?: boolean;
}

function createButton(props: ButtonProps): HTMLButtonElement {
    const button = document.createElement("button");
    button.textContent = props.label;
    button.disabled = props.disabled || false;
    button.addEventListener("click", props.onClick);
    return button;
}

// Working with DOM
const button = createButton({
    label: "Click me",
    onClick: (event) => {
        console.log("Button clicked!", event.target);
    }
});

// ===== ERROR HANDLING =====

// Custom error types
class ValidationError extends Error {
    constructor(public field: string, message: string) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateEmail(email: string): string {
    if (!email.includes("@")) {
        throw new ValidationError("email", "Invalid email format");
    }
    return email;
}

// Using try-catch with typed errors
function processUser(userData: { email: string; name: string }): User | null {
    try {
        const validEmail = validateEmail(userData.email);
        return {
            id: Date.now(),
            name: userData.name,
            email: validEmail
        };
    } catch (error) {
        if (error instanceof ValidationError) {
            console.error(`Validation failed for ${error.field}: ${error.message}`);
        }
        return null;
    }
}

// ===== UTILITY TYPES =====

// Partial - makes all properties optional
type PartialUser = Partial<User>;
const userUpdate: PartialUser = { name: "New Name" };

// Pick - select specific properties
type UserSummary = Pick<User, "id" | "name">;
const summary: UserSummary = { id: 1, name: "Alice" };

// Omit - exclude specific properties
type CreateUserData = Omit<User, "id">;
const newUserData: CreateUserData = {
    name: "Charlie",
    email: "charlie@example.com"
};

// Record - create object type with specific keys
type UserRoles = Record<string, string[]>;
const roles: UserRoles = {
    admin: ["read", "write", "delete"],
    user: ["read"],
    guest: []
};

// ===== MODULES AND IMPORTS =====

// Export types and interfaces
export interface Config {
    apiUrl: string;
    timeout: number;
}

export type Theme = "light" | "dark";

// Default export
export default class Logger {
    log(message: string): void {
        console.log(`[${new Date().toISOString()}] ${message}`);
    }
}
```