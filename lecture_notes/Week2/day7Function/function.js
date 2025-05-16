//for each
Array.prototype.myForEach = function(cb){
    for(let i = 0; i < this.length; i++){
        cb(this[i], i, this)
    }
}

const arr = [11, 12, 13]
// arr.myForEach(ele => console.log(ele));


// map
Array.prototype.myMap = function(cb){
    const res = [];
    for(let i = 0; i < this.length; i++){
        res.push(cb(this[i],i, this))
    }
    return res;
}

// console.log(arr.myMap(ele => ele*2))

// filter
Array.prototype.myFilter = function(cb){
    const res = [];
    for(let i = 0; i < this.length; i++){
        if(cb(this[i],i,this)){
            res.push(this[i])
        }
    }

    return res;
}

// console.log(arr.myFilter(ele => ele % 2 === 0))

// reduce
Array.prototype.myReduce = function(cb, initialVal){
    let accu = initialVal;
    for(let i = 0; i < this.length; i++){
        accu = cb(accu, this[i], i, this)
    }
    return accu;
}