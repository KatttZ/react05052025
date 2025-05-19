# String Methods

const str = "Hello JavaScript!";

str.length;                     //21
str.charAt(1);                  //' '
str.includes("Java");           //true
str.indexOf("Script");          //9
str.slice(2, 7);                //'Hello'
str.substring(2, 7);            //'Hello'
str.toLowerCase();              //'  hello javascript!  '
str.toUpperCase();              //'  HELLO JAVASCRIPT!  '
str.trim();                     //'Hello JavaScript!'
str.replace("Java", "Type");    //'  Hello TypeScript!  '
str.split(" ");                 //['','', 'Hello', 'JavaScript!','']

# Array Methods

const arr = [10, 20, 30, 40];

arr.length;                     //4
arr.push(50);                   //[10, 20, 30, 40, 50]
arr.pop();                      //50, arr becomes [10, 20, 30, 40] 
arr.shift();                    //10, arr becomes [20, 30, 40]
arr.unshift(5);                 //[5, 20, 30, 40]
arr.includes(30);               //true
arr.indexOf(20);                //1
arr.splice(1, 2);               //[20, 30], arr becomes [5, 40]
arr.slice(0, 2);                //[5, 40]

arr.forEach(num => console.log(num)); //  10, 20 , 30 , 40
const doubled = arr.map(n => n * 2);   //  [10, 80]
const filtered = arr.filter(n => n > 10); //  [40]
const sum = arr.reduce((acc, cur) => acc + cur, 0); //  45
arr.find(n => n > 10);          //40
arr.sort((a, b) => b - a);      //[40, 5]
arr.reverse();                  //[5, 40]
[1, 2].concat([3, 4]);          //[1, 2, 3, 4]
arr.join("-");                  //'5-40'
[[1, 2], [3, 4]].flat();        //[1, 2, 3, 4]

3. Object Methods

const obj = {
  name: "Kat",
  age: 30,
  isDev: true
};

Object.keys(obj);               //  ['name', 'age', 'isDev']   
Object.values(obj);             //  ['Kat', 30, true]
Object.entries(obj);            //  [['name', 'Kat'], ['age', 30], ['isDev', true]]
const clone = Object.assign({}, obj); //  { name: 'Kat', age: 30, isDev: true }
obj.hasOwnProperty("age");        //  true
delete obj.age;                   //  obj becomes { name: 'Kat', isDev: true }
const json = JSON.stringify(obj); //  '{"name":"Kat","isDev":true}'
const parsed = JSON.parse(json);  //  { name: "Kat", isDev: true }
const frozen = Object.freeze({ test: 1 });
// frozen.test = 2; // No effect
const sealed = Object.seal({ test: 1 });
// sealed.test = 2; // Allowed
// delete sealed.test; // Not allowed





# Add Math and Date and Promise methods content

math_methods = """
🧮 Math Methods

Math.PI;                          // ➜ 3.141592653589793
Math.round(4.7);                  // ➜ 5
Math.floor(4.7);                  // ➜ 4
Math.ceil(4.2);                   // ➜ 5
Math.max(5, 10);                  // ➜ 10
Math.min(5, 10);                  // ➜ 5
Math.random();                    // ➜ Random number between 0 and 1
Math.abs(-7);                     // ➜ 7
Math.pow(2, 3);                   // ➜ 8
Math.sqrt(16);                    // ➜ 4
"""

date_methods = """
📆 Date Methods

const now = new Date();
now.toString();                   // ➜ 'Fri May 16 2025 ...'
now.toDateString();               // ➜ 'Fri May 16 2025'
now.toISOString();                // ➜ '2025-05-16T...Z'
now.getFullYear();                // ➜ 2025
now.getMonth();                   // ➜ 4 (0 = Jan, 4 = May)
now.getDate();                    // ➜ 16
now.getDay();                     // ➜ 5 (0 = Sunday, 5 = Friday)
now.getHours();                   // ➜ Current hour
now.getMinutes();                 // ➜ Current minute
now.getSeconds();                 // ➜ Current second

const future = new Date("2025-12-25");
future.getTime();                 // ➜ Timestamp (ms since Jan 1, 1970)
"""

promise_methods = """
⏳ Promise Methods

const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 1000);
});

promise
  .then(result => console.log(result)) // ➜ "Done!"
  .catch(error => console.error(error))
  .finally(() => console.log("Finished"));

Promise.resolve(123).then(console.log);   // ➜ 123
Promise.reject("Error").catch(console.log); // ➜ "Error"

Promise.all([Promise.resolve(1), Promise.resolve(2)])
  .then(values => console.log(values));  // ➜ [1, 2]

Promise.race([
  new Promise(r => setTimeout(() => r("A"), 500)),
  new Promise(r => setTimeout(() => r("B"), 100))
]).then(console.log); // ➜ "B"
"""

# Clean up non-ASCII characters
math_methods_clean = remove_non_ascii(math_methods)
date_methods_clean = remove_non_ascii(date_methods)
promise_methods_clean = remove_non_ascii(promise_methods)

