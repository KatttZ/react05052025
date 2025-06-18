# Node Basic

Node is a runtime environment for executing JavaScript code outside of browser
It's not a programming language!!!

Use Node to build backend services
API (application programming interface)

- NVM(Node Version Manager)

1. A tool that lets you install and switch between different versions od Node.js
2. Different projects may require different Node versions. NVM helps you manage that easily

- CommonJs module (old way to export and import before ES Modules)
  A system used in Node.js to organize and reuse code.
  You use require() to load code from other files and module.exports to share your code

```js
// math.js
module.exports = {
  add: (a, b) => a + b,
};

// main.js
const math = require("./math");
console.log(math.add(2, 3)); // 5
```

- Globals (Global Variables)
  Variables or objects that are available everywhere in your Node.js application without needing to require() them

global – like window in browsers, it’s the global scope

avoid adding your own globals -- it can make debugging hard

- fs, path, os

1. fs (file system) Read and write files
   ex: fs.readFile(), fs.writeFile()

2. path: work with file paths across OSes (build, join, normalize paths)
   ex: path.join(\_\_dirname, 'file.txt')

3. os: info about the system (CPU, memory, platform)
   ex: os.platform(), os.freemem()

- Event Emitters
  A pattern in Node.js that lets objects emit events and listen for them
  Used for things like streams, servers, and anything asynchronous.

```js
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("greet", () => {
  console.log("Hello!");
});

emitter.emit("greet"); // logs "Hello!"
```

- http server
  Node.js lets you build a simple web server with the build-in http module. It listens for
  requests and sends back responses

```js
const http = require("http");

http
  .createServer((req, res) => {
    res.write("Hello, world!");
    res.end();
  })
  .listen(3000);
```

You can build custom APIs or serve web pages with no extra tools.

- Common Js vs ES Module
  run in node.js is common js
  run in browser is module

| Feature         | CommonJS (`require`)          | ES Module (`import`)                              |
| --------------- | ----------------------------- | ------------------------------------------------- |
| Syntax          | `require()`, `module.exports` | `import`, `export`                                |
| Default in...   | Node.js (by default)          | Modern browsers & ESM-supporting Node.js          |
| Sync or Async   | Synchronous                   | Asynchronous (behind the scenes)                  |
| File Extensions | `.js`                         | `.mjs` or with `"type": "module"` in package.json |
| Example         | `const x = require('./x')`    | `import x from './x.js'`                          |

- package json is metadata file used in Node.js and JavaScript projects to manage the project's dependencies,
  scripts, and configuration. It's essential for any project that uses npm or yarn

  - it defines the project, it gives basic info about the project
  - lists dependencies, track all the packages(libraries) your project uses(after run npm install)
  - lists Dev dependencies, tools needed only for development (testing or build tools)
  - defines scripts (custom command-line shortcuts)
  - version control for packages, locks the version ranges so everyone working on the project installs compatible versions

- node_modules is a folder where all your installed npm packages(dependencies) are stored when you run `npm install`

- Node.js environment vs Browser environment
  they both used to run JavaScript, but they're designed for different purpose, and offer different features

| Feature       | Node                    | Browser               |
| ------------- | ----------------------- | --------------------- |
| Access to DOM | can't!                  | yes                   |
| Globals       | global                  | window, document      |
| Purpose       | Server-side programming | Client-side(web-page) |
| APIs          | has system-level APIs   | DOM, localStorage, UI |
| Modules       | CommonJS or ESM         | ESM only              |
