// Global scope

var globalVar = "I am global";

function accessGlobal() {
  return globalVar;
}

// console.log(accessGlobal()); // Expected output? "I am global"
// console.log(globalVar);      // Expected output? "I am global"

// Local scope
function localScope() {
  var localVar = "I am local to this function";
}

// localScope();  // Nothing happen
// console.log(localVar); // What happens here and why?  referenceError, localVar is not define, the variable is defined inside the function
    
// Block scope
if (true) {
  let blockVar = "I exist inside this block only";
  const blockConst = "So do I!";
}

// console.log(blockVar); // What is the result and why? referenceError, can't be access outside the block scope
// console.log(blockConst); // What is the result and why? referenceError

// Function scope vs block scope
function loopScope() {
  for (var i = 0; i < 3; i++) {
    // console.log(i); // Outputs during loop? 
  }
  //   console.log("After loop with var: " + i); // What happens here?

  for (let j = 0; j < 3; j++) {
    console.log(j); // Outputs during loop?  0,1,2
  }
  //   console.log("After loop with let: " + j); // What happens here?
}

loopScope();
