#  Async, Promises & The Event Loop

## 🔁 Event Loop
The **event loop** continuously checks the **event queue**.  
If the **call stack** is empty and the queue has pending tasks, it pushes them onto the stack to execute their callbacks.

---

##  Execution Model

###  1. Thread & Call Stack

- JavaScript is **single-threaded** — executes one command at a time.
- A thread includes:
  -  **Memory**: stores variables
  -  **Call Stack**: tracks function calls (LIFO structure)

#### Call Stack

- Functions are pushed when called and popped when completed.
- The **Global Execution Context** is always at the bottom.

####  Synchronous Code

- Executes line-by-line, waiting for each line to finish.
- **Blocking** means code execution is stuck waiting on something.

---

###  2. Web APIs (Browser Environment)

**Web APIs** are browser-provided features that handle asynchronous tasks, such as:

- `setTimeout`, `setInterval`
- `fetch`, `XMLHttpRequest`
- DOM Manipulation
- `localStorage` / `sessionStorage`
- Geolocation API


These APIs offload async tasks and push callbacks to the **event queue** when complete.

---

###  3. Execution Context

Each context includes:

- **Creation Phase**: Memory allocation for variables and functions
- **Execution Phase**: Code is executed line by line

Types of Execution Contexts:
- 🌍 Global Execution Context (created at program start)
- 🧩 Function Execution Context (created on each function call)

---

##  Callback Hell

**Callback Hell** happens when too many nested callbacks make code hard to read:

```js
firstFunction(args, function () {
  secondFunction(args, function () {
    thirdFunction(args, function () {
      // And so on…
    });
  });
});
```

Four easy ways to manage callback hell:

1. Write comments
2. Split functions into smaller functions
3. Using Promises
4. Using Async/await

## Promise
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

```js
const promise1 = newPromise((resolve, reject) => {
  // async logic here
})
```

**Promise States**
- pending: initial state
- fulfilled: completed successfully
- rejected: failed with an error



**Promise Concurrency Methods**:
These static methods help manages multiple Promises
takes an iterable of promises as input and returns a single Promise


| Method                 | Behavior                                                          |
| ---------------------- | ----------------------------------------------------------------- |
| `Promise.all()`        | Resolves when **all** promises fulfill; rejects if **any** reject |
| `Promise.allSettled()` | Resolves when **all** settle (fulfilled or rejected)              |
| `Promise.any()`        | Resolves when **any** promise fulfills; rejects if **all** reject |
| `Promise.race()`       | Resolves/rejects as soon as the **first** promise settles         |


✅ Use Promise.all() for tasks that must all succeed.
✅ Use Promise.any() when you're happy with the first successful result.
✅ Use Promise.allSettled() to get results of all promises regardless of failure.
⚠️ Use Promise.race() with caution — the first one wins, even if it's an error.


## Async / Await
An async function always returns a Promise;
await pauses execution until the Promise settles.

```js
async function fetchData() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
```