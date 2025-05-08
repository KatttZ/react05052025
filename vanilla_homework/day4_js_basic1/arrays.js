// Do not use prototype methods

// Data types & numsays
export function checkIfStringIsNumber(str) {
  //   Write a function that takes a string as an argument and
  //   returns a boolean indicating if the str is a number
  //   Example:
  //   '1' -> true, "a" -> false, "1a" -> false
    return typeof str === 'string' && str.trim() !== '' && !isNaN(str);
}

export function findAvgOfNums(arr) {
  //   Write a function that takes an array of numbers and strings as an
  //   argument and returns the average of all the numbers.
  //   Example: const arr = [1, '2', 3, '4', 5];
  //   Expected output: 3
  let sum = 0;
  let count = 0;
  for(let ele of arr){
    let num = Number(ele);
    if(!isNaN(num)){
      sum += num;
      count++;
    }
  }
  return count === 0? 0 : sum/count;
}

export function findAverageAge(people) {
  //   Write a function that takes an array of people objects as an argument and
  //   returns the average age of all the people.
  //   Do not use prototype methods
  //   Example: const people = [{name: 'John', age: 21}, {name: 'Alice', age: 25}];
  let sum = 0;
  for(let p of people){
    sum += p.age;
  }
  return people.length === 0 ? 0 : sum / people.length;
}

export function findAvgAgeByJob(people, job) {
  //   Write a function that takes an array of people objects as an argument and
  //   returns the average age of people with the same job.
  //   Do not use prototype methods
  //   Example: const people = [{name: 'John', age: 21, job: 'teacher'}, {name: 'Alice', age: 25, job: 'teacher'}];
  //   Expected output: 23 (teacher)
  let sum = 0;
  let count = 0;
  for(let person of people){
    if(person.job === job){
      sum += person.age;
      count++;
    }
  }

  return count === 0 ? 0 : sum / count;

}

export function findMaxNum(arr) {
  //   Write a function that takes an array of numbers as an argument and
  //   returns the maximum number in that array.
  //   Do not use Math.max
  //   Example: const arr = [1, 2, 3, 4, 5];
  let max = -Infinity;
  for(let num of arr){
    if(num > max){
      max = num
    }
  }
  return max;
}

export function findLongestWord(str) {
  //   Write a function that takes a string as an argument and
  //   returns the longest word in that string.
  //   Hint: You can use String.prototype.split
  //   Example: const str = 'I love JavaScript';
  let words = str.split(' ');
  let longest = '';

  for(let word of words){
    if(word.length > longest.length){
      longest = word;
    }
  }
  return longest;
}

export function findSumOfEvenNums(arr) {
  //   Write a function that takes an array of numbers as an argument and
  //   returns an array of only the even numbers.
  //   Example: const arr = [1, 2, 3, 4, 5];
  //   Expected output: [2, 4]
  let res = [];
  for(let num of arr){
    if(num%2===0){
      res.push(num)
    }
  }
  return res;
}

// reference types
export function bubbleSortArr1(num) {
  // Write a function that takes an array of numbers as an argument and
  // returns a new sorted array using the bubble sort algorithm.
  // Do not use Array.prototype.sort
  // Example: const num = [5, 3, 8, 2, 1];
  // Expected output: [1, 2, 3, 5, 8]

}

export function bubbleSortArr2(num) {
  // Same as above but this time returns the original array reference sorted.
}

export function removeTypes(arr, typeToRemove) {
  // Write a function that takes an array of mixed types and a type as arguments
  // and returns a new array without the specified type.
  // Example: const arr = [1, '2', 3, '4', 5];
  // removeTypes(arr, 'string');
  // Expected output: [1, 3, 5]
  let res = [];
  for(let ele of arr){
    if(typeof ele !== typeToRemove){
      res.push(ele)
    }
  }
  return res;
}

// reinvent the wheel: prototype methods
export function changeNumsByAmount(nums, amount, operator) {
  // Write a function that takes an array of numbers, an amount and an operator as arguments
  // and returns a new array with the numbers changed by the amount and operator.
  // Example: const nums = [1, 2, 3, 4, 5];
  // changeNumsByAmount(nums, 2, '+');
  // Expected output: [3, 4, 5, 6, 7]
  let res = [];
  for(let num of nums){
    if(operator === '+'){
      res.push(num + amount)
    }else if(operator === '-'){
      res.push(num - amount)
    }else if(operator === '*'){
      res.push(num * amount)
    }else{
      res.push(num / amount)
    }
  }
  return res;
}

export function removeNumFromArr(nums, num) {
  // Write a function that takes an array of numbers and a number as arguments
  // and returns a new array without the specified number.
  // Example: const nums = [1, 2, 3, 3, 3, 4, 5];
  // removeNumFromArr(nums, 3);
  // Expected output: [1, 2, 4, 5]
    let res = [];
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== num) {
        result.push(nums[i]);
      }
    }
    return res; 
}
