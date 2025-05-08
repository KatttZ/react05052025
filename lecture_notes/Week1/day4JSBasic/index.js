document.getElementById("getNum").addEventListener("click",e => {
    const num = document.getElementById('num-input').value;

    // + sign convert string to a number same like Number(),no space!
    console.log(+num + 100);
})