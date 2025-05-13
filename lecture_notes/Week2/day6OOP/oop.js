// const s = 'Hello';

// const s2 = new String('Hello')
// console.log(typeof s) // string
// console.log(typeof s2) // object


// console.log(window)
// window.alert('testing testing')

// console.log(navigator.appVersion);


// Object literal 
// const book1 = {
//     title: 'Book One',
//     author: 'John Doe',
//     year: '2013',
//     getSummary: function(){
//         return `${this.title} was written by ${this.author} in ${this.year}`
//     }
// }

// const book2 = {
//     title: 'Book Two',
//     author: 'Jane Doe',
//     year: '2016',
//     getSummary: function(){
//         return `${this.title} was written by ${this.author} in ${this.year}`
//     }
// }

// console.log(book1.title) // Book One
// console.log(book2.getSummary()) //Book One was written by John Doe in 2013

// console.log(Object.values(book2))
// console.log(Object.keys(book2));
// console.log(Object.entries(book2));



// Constructor 
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    // this.getSummary = function(){
    //     return `${this.title} was written by ${this.author} in ${this.year}`
    // }


}

// getSummary
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`
}

// getAge
// Book.prototype.getAge = function(){
//     const years = new Date().getFullYear() - this.year;
//     return `${this.title} is ${years} years old`
// }

// revise / change year
// Book.prototype.revise = function(newYear){
//     this.year = newYear;
//     this.revised = true;
// }



// instantiate an object
// const book1 = new Book('Book One', 'John Doe', '2013');
// const book2 = new Book('Book Two', 'Jane Doe', '2016');

// console.log(book2.getSummary());

// console.log(book2.getAge())
// console.log(book2)
// book2.revise('2020')
// console.log(book2)


// Magazine constructor
function Magazine(title, author, year, month){
    Book.call(this, title, author, year);

    this.month = month;
}


// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype)

// Instantiate Magazine Object
const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');

// use magazine constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1)
console.log(mag1.getSummary())


// Object of Proto
const bookProtos = {
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    },

    getAge: function(){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`
    }
}


// create object
// const book1 = Object.create(bookProtos);
// book1.title = 'Book One';
// book1.author = 'John Doe';
// book1.year = '2013';

const book1 = Object.create(bookProtos,{
    title:{value:'Book One'},
    author:{value:'John Doe'},
    year:{value:'2020'}
});


console.log(book1)





class BookClass {
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }

    getAge(){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`
    }

    revise(newYear){
        this.year = newYear
        this.revise = true
    }

    static topBookStore() {
        console.log('Barnes & Noble') 
    }
}

// Instantiate Object
const bookNew = new BookClass('Book New', 'John Doe', '2013')
// console.log(bookNew)
// bookNew.revise(2025)

// console.log(bookNew)

BookClass.topBookStore()


// Magazine subclass

class MagazineClass extends BookClass {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}


// Instantiate Magazine
const maga1 = new MagazineClass('Mag One', 'John Doe', '2018', 'Jan')

console.log(maga1.getSummary())