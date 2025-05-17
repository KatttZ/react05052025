//writes an example of a closure that generates a random number between 0 and 100 with initiated
// and logs the password is "##" when invoked

// console.log(typeof Math.random) // function
function generatePassword2() {
  const passcode = Math.floor(Math.random() * 100);

  return function () {
    console.log(`The password is ${passcode}`);
  };
}

// Modify the closure above to memoize an objective of name <-> passcode pairs,
// and log a passcode for a given name from cache.
// For instance, every time 'logPasscode('peter')' is run, the function should log
//  "The passcode is ##" with the specific passcode generated for 'Peter';

function generatePassword2() {
  const passCodes = {};

  return function inner(name) {
    if (!passCodes[name]) {
      passCodes[name] = Math.floor(Math.random() * 100);
    }
    console.log(`The password is ${passCodes[name]} for ${name}`);
  };
}

const logPasscode1 = generatePassword2();
// logPasscode1("peter");

const logPasscode2 = generatePassword2();
// logPasscode2("Jessie");

// password expired in 5 secs
function generatePassword3() {
  const passCodes = {}; // {name:{pwd,expiredTime}}

  return function inner(name) {
    const currTime = Date.now();

    if (!passCodes[name]) {
      const password = Math.floor(Math.random() * 100);

      passCodes[name] = {
        value: password,
        expiredTime: currTime + 5000,
      };
    }

    if (Date.now() > passCodes[name].expiredTime) {
      console.log(`Password expired for ${name}`);
    } else {
      console.log(`The password is ${passCodes[name].value} for ${name}`);
    }
  };
}

const logPasscode4 = generatePassword3();

logPasscode4("Peter");

setTimeout(() => logPasscode4("Peter"), 6000);

// password expired and generate new one

function generatePassword4() {

  const passcodeCache = {}; // { name: { passcode, expiry } }
  const expirationTime = 100 * 1000; // 100 seconds in milliseconds

  return function logPasscode(name) {
    const now = Date.now();

    // If there's no existing passcode, or it's expired
    if (!passcodeCache[name] || now > passcodeCache[name].expiry) {
      const passcode = Math.floor(Math.random() * 101); // 0–100 inclusive
      const expiry = now + expirationTime;

      passcodeCache[name] = { passcode, expiry };

      console.log(
        `The old password of ${name} expired or was not set, the new password is now ${passcode}.`
      );
    } else {
      const { passcode } = passcodeCache[name];
      console.log(
        `The current password for ${name} is still valid: ${passcode}.`
      );
    }
  }
}
