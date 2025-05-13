const people = {
  1: { name: "Alice", age: 25 },
  2: { name: "Bob", age: 30 },
  3: { name: "Charlie", age: 35 },
};

// get the average age of the people
export const getAverageAge = (people) => {
  let total = 0;

  let peopleArr = Object.values(people);

  for(let person of peopleArr){
    total += person.age
  }
  return peopleArr.length === 0 ? 0 : total / peopleArr.length;
};
