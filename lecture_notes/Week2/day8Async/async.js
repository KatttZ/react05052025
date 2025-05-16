function first() {
  console.log("first...");
  second();
}

function second() {
  console.log("second...");
  third();
}

function third() {
  console.log("third...");
}

// first();
// second();
// third()

const fetchData = () => {
  return new Promise((resolve, reject) => {
    const success = true;

    setTimeout(() => {
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Error fetching data.");
      }
    }, 2000);
  });
};

fetchData()
  .then((response) => {
    console.log(response); // "Data fetched successfully!"
  })
  .catch((error) => {
    console.error(error);
  });


function getWeather(){
    return new Promise((resolve,reject) => {
        reject('Sunny')
    })
}

function onSuccess(data){
    console.log(`Success ${data}`)
}

function onError(error){
    console.log(`Error: ${error}`)
}


getWeather().then(
    onSuccess,onError
)