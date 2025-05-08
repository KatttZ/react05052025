# JS Basics 1


## Variables
Variables in JavaScript can be declared using var, let, or const keywords.
var function scope / redeclare / reassign
let block scope / can't redeclare / can reassign
const block scope / can't redeclare / can;t reassign

hoisting means moving variables to top of file
let / const / var / function hoist differently


## Data Types

reference type vs primitive type
reference: stored in memory, passed by reference
primitive: passed by value  

number, string, undefine, null, boolean, 


type conversion vs coercion:
Type coercion: This is done automatically by javascript, it’s a “feature”
Type conversion: This is something we do intentionally, actively converting the data types


The typeof operator in JavaScript returns the data type of its operand.

## Control Flows
Control flows are how a program decides what to do next. Instead of just running every line from top to bottom, it can make decisions, repeat actions, or skip parts based on conditions.


- Conditional statements in JavaScript include if, else if, and else, which allow you to execute different blocks of code based on different conditions.


    -   if: Checks if a condition is true. If it is, the code inside runs.

    -   else if: Checks another condition if the first if is false.

    -   else: Runs if none of the above conditions were true.


- Loops: for, while, switch 
    -   for loop: Repeats a block of code a certain number of times (often used with a counter or list).
    -   while loop: Keeps repeating as long as a condition is true.
    -   switch (in some languages like C, Java, JavaScript): A cleaner way to check multiple conditions based on a single variable (instead of using many if/else if).

    ```js
    switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("Weekend is coming");
        break;
    default:
        console.log("Just another day");
    }
    ```

-   continue, break:
    - continue: Skips the rest of the current loop and jumps to the next round.
    ```py
    for i in range(5):
        if i == 2:
            continue  # Skip printing 2
        print(i)
    ```

    - break: Stops the loop completely, even if the condition says it should keep going.
    ```py
    while True:
        user_input = input("Type 'exit' to quit: ")
        if user_input == 'exit':
            break

    ```


Primitive data types:
String, number, boolean, undefined, null
Always compare and pass by value

Everything else is reference
Compare /pass by the reference

== and === have nothing to with reference


… spread operator is always a shallow copy
