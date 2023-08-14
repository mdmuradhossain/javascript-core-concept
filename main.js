// console.log(window);
// console.dir(document);
// Basic Javascript

// Functional Javascript

// First Class Function in JS
const sayHello = function () {
    return function () {
        console.log("Hello");
    }
}

let myFunc = sayHello();
myFunc();

function speak(string) {
    console.log(string);
}

speak("Hello");

var talk = speak;
talk("Murad");

function functionReturner(fn) {
    return fn;
}

var chat = functionReturner(talk);
chat("Good Morning");


var myFunction = [talk];
myFunction[0]("Good AfterNoon");

talk.myProperty = "Bananas";
console.log(talk.myProperty);

// Inner Function in JS
let numOne = 20;
let numTwo = 3;
const name = "John";

function multiplyNumber() {
    return numOne * numTwo;
}
console.log(multiplyNumber());

function getResult() {
    let numOne = 5;
    let numTwo = 6;

    function addNumber() {
        return "Name : " + name + " Result: " + (numOne + numTwo);
    }
    return addNumber();
}
console.log(getResult());

// Higher Order Function in JS

//Closure in JS
function showName(firstName, lastName) {
    var nameIntro = "Your Name is: ";

    function makeFullName() {
        return nameIntro + firstName + ' ' + lastName;
    }
    return makeFullName();
}
console.log(showName('Brad', 'Traversy'));

// function celebrityName(firstName){
//       var nameIntro = "THe Celebrity is: ";
//       function lastName(lastName){
//           return nameIntro+firstName+" "+lastName;
//       }
//       return lastName();
// }
// var celebName = celebrityName('Johnny');
// celebName('Depp');
// console.log(celebName());

function celebrityId() {
    var celebrityId = 999;
    return {
        getId: function () {
            return celebrityId;
        },
        setId: function (theNewId) {
            celebrityId = theNewId;
        }
    }
}
var jDeppId = celebrityId();
console.log(jDeppId.getId());
jDeppId.setId(4435);
console.log(jDeppId.getId());

function celebrityIdCreator(theCelebrities) {
    var i;
    var uniqueId = 100;
    for (i = 0; i < theCelebrities; i++) {
        theCelebrities[i]['id'] = function () {
            return uniqueId + i;
        }
    }
    return theCelebrities;
}

var actionCelebrity = [{
    name: 'Stallone',
    id: 123
}, {
    name: 'Tom Cruise',
    id: 435
}, {
    name: 'Will Smith',
    id: 234
}];

var createIdForActionCelebs = celebrityIdCreator(actionCelebrity);
var stalloneId = createIdForActionCelebs[0];
console.log(stalloneId.id);
var cruiseId = createIdForActionCelebs[1];
console.log(cruiseId.name + " " + cruiseId.id);

// Anonymous Closure
(function () {
    var myGrades = [93, 95, 88, 0, 55, 91];
    var average = function () {
        var total = myGrades.reduce(function (accumulator, item) {
            return accumulator + item;
        }, 0);
        return "Your average grade is " + total / myGrades.length + '.';
    }
    var failing = function () {
        var failingGrades = myGrades.filter(function (item) {
            return item < 70;
        });
        return "You failed " + failingGrades.length + "times.";
    }
    console.log(failing());
}());

// Higher Order Function
var trip = function triple(x) {
    return x * 3;
}
console.log(trip(5));

var animals = [{
        name: 'Fluffy',
        species: 'rabbit'
    },
    {
        name: 'Caro',
        species: 'dog'
    },
    {
        name: 'Hamilton',
        species: 'dog'
    },
    {
        name: 'Harold',
        species: 'fish'
    },
    {
        name: 'Ursula',
        species: 'cat'
    },
    {
        name: 'Jimmy',
        species: 'fish'
    }
];

var dogs = [];
for (var i = 0; i < animals.length; i++) {
    if (animals.species === 'dog') {
        dogs.push(animals[i]);
    }
}
console.log(dogs);

// Filter Method
var dogs = animals.filter(function (animal) {
    return animal.species === 'dog';
});
console.log(dogs);

const companyInfo = [
    {
        name: "Google",
        category: "Technology",
        start: 1998,
        end: "Still Running"
    },
    {
        name: "Apple",
        category: "Technology",
        start: 1980,
        end: "Still Running"
    },
    {
        name: "Range Rover",
        category: "AutoMobile",
        start: 1990,
        end: "Still Running"
    },
    {
        name: "IBM",
        category: "Computer",
        start: 1960,
        end: "Still Running"
    },
    {
        name: "Yahoo!",
        category: "Tech",
        start: 1995,
        end: 2018
    },
    {
        name: "Pixar",
        category: "Studio",
        start: 1990,
        end: 2000
    },
    {
        name: "Walmart",
        category: "Retail",
        start: 1995,
        end: 2016
    },
    {
        name: "Toyota",
        category: "Automoblie",
        start: 1930,
        end: "Still Running"
    },
    {
        name: "Microsoft",
        category: "Software",
        start: 1991,
        end: "Still Running"
    }
];

const ages = [33, 12, 20, 16, 8, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// ForEach Method
for (let i = 0; i <= companyInfo.length; i++) {
    console.log(companyInfo[i]);
}

companyInfo.forEach(function (company) {
    console.log(company.name);
    console.log(company.category);
    console.log(company.start);
    console.log(company.end);
});

// Filter Method
let canDrink = [];
for (let j = 0; j < ages.length; j++) {
    if (ages[j] >= 21) {
        canDrink.push(ages[j]);
    }
}
console.log(canDrink);

const canDrinkAlcohol = ages.filter(function (age) {
    if (age >= 20) {
        return true;
    }
});
console.log(canDrinkAlcohol);

const isAdult = ages.filter(age => age >= 18);
console.log(isAdult);

const retailCompany = companyInfo.filter(function (company) {
    if (company.category == "Retail") {
        return true;
    }
});
console.log(retailCompany);

const retailCompanies = companyInfo.filter(company => company.category == 'Retail');
console.log(retailCompanies);

const eightiesCompanies = companyInfo.filter(eightiesCompany => (eightiesCompany.start >= 1980 && eightiesCompany.start < 1990));

console.log(eightiesCompanies);

const lastedTenYears = companyInfo.filter(lastedTenYear => (lastedTenYear.end - lastedTenYear.start >= 10));
console.log(lastedTenYears);


// Map Method
const companyNames = companyInfo.map(function (company) {
    return company.name;
});
console.log(companyNames);

const agesSquare = ages.map(age => Math.sqrt(age));
console.log(agesSquare);
const agesTimesTwo = ages.map(age => age * 2);
console.log(agesTimesTwo);

// Sort Method
const sortedCompanies = companyInfo.sort(function (company1, company2) {
    if (company1 > company2) {
        return 1;
    } else {
        return -1;
    }
});
console.log(sortedCompanies);

const sortedCompany = companyInfo.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompany);

const sortAges = ages.sort();
console.log(sortAges);

const sortAge = ages.sort((a, b) => a - b);
console.log(sortAge);


// Reduce Method

let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
    ageSum = ageSum + ages[i];
}
console.log(ageSum);


const agesSum = ages.reduce(function (total, age) {
    return total + age;
}, 0);
console.log(agesSum);

const totalYear = companyInfo.reduce(function (total, company) {
    return total + (company.end - company.start);
}, 0);

console.log(totalYear); //Because I Put String Also

//Object Oriented Programming | ES5-2012

const book1 = {
    title: "Book 1",
    author: "John Ducket",
    year: 2015,
    getSummary: function () {
        return `Title Of The Book : ${this.title}and Written By : ${this.author} , Published Year : ${this.year}`;
    }
}
console.log(book1.getSummary());
// Values of the Object
console.log(Object.values(book1));

// Constructor Pattern
function Book(title, author, year, price) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.price = price;

    this.getSummary = function () {
        return `Book Name: ${this.title}, Book Author: ${this.author}, Published Year: ${this.year}`;
    }
}

const book2 = new Book("Eliquent Javascript", "Marijn", 2013);
console.log(book2.getSummary());
const book3 = new Book("You Don't Know Javascript", "Kyle Simpson", 2015);
console.log(book3.getSummary());
const book4 = new Book("Effective Javascript", "David Herman", 2013);
console.log(book4.getSummary());

// Prototype Method
Book.prototype.getBookPrice = function () {
    let discount = (this.price * 10) / 100;
    let bookPrice = this.price - discount;
    return `Book Discount: ${discount}, Book Price After Discount: ${bookPrice}`;
}

const book5 = new Book("Head First Javascript", "Elisabeth Freeman and Eric Freeman", 2014, 200);
console.log(book5.getBookPrice());

Book.prototype.getBookAge = function () {
    // let bookage = new Date().getFullYear()-this.year;
    let currentYear = 2018;
    let bookAge = currentYear - this.year;
    return `${this.title} Age is ${bookAge}`;
}
console.log(book4.getBookAge());

console.log("Book Age: " + book5.getBookAge());
// Change The Year
Book.prototype.revise = function (newYear) {
    this.year = newYear;
    this.revise = true;
};
book2.revise('2018');
console.log(book2.year);

// Inheritance In ES5

// Magazine Constructor
function Magazine(title, author, year, price, month) {
    Book.call(this, title, author, year, price);
    this.month = month;
}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine Object
const mag1 = new Magazine("Time", "John Doe", "2018", 25, "Jan");
console.log(mag1);

const mag2 = new Magazine('Fox', 'Brad Traversy', 2017, 30, "Feb");
console.log(mag2.getSummary());
// Use Magazine Constructor
Magazine.prototype.constructor = Magazine;
console.log(mag1);
console.log(mag2);

// Bind() Call() Apply() Method
// Bind()
var pokemon = {
    firstName: 'Pika',
    lastName: 'Chu',
    getPokeName: function () {
        var fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
};

var pokemonName = function (snack, hobby) {
    console.log(this.getPokeName() + ' I choose You');
    console.log(this.getPokeName() + ' Loves ' + snack + ' and hobby ' + hobby);
};

var logPokemon = pokemonName.bind(pokemon);
logPokemon('Sub', 'Drawing');

var mobile = {
    brand: 'Apple',
    model: 'I-phone 6s Plus',
    getMobileInfo: function () {
        var mobileInfo = 'Brand Name: ' + this.brand + ' Model Name: ' + this.model
        return mobileInfo;
    }
};
var mobilePriceYear = function (price, year) {
    console.log(this.getMobileInfo() + " Mobile Price: " + price + " Release Year: " + year);
};
var mobileOthersInfo = function (color, ram, battery, storage) {
    console.log(this.getMobileInfo() + ' ' + ' Color: ' + color + ' Ram: ' + ram + ' Battery: ' + battery + ' Storage: ' + storage);
};
mobilePriceYear.call(mobile, '$799', 2015);
mobileOthersInfo.apply(mobile, ['White', '3GB', '3000mah', '64GB']);

// Object Of Protos | Object.create
const bookProtos = {
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge: function () {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
}

// Create Object For This Prototype
const book6 = Object.create(bookProtos);
book6.title = 'JS-Up and Down';
book6.author = 'Kylie Simpson';
book6.year = 2015;
console.log(book6);
console.log(book6.getSummary());
console.log(book6.getAge());
// Same Thing With Another Way
const book7 = Object.create(bookProtos, {
    title: {
        value: "Theory Of Everything"
    },
    author: {
        value: "Stephen Hawkings"
    },
    year: {
        value: 1995
    }
});
console.log(book7);
console.log(book7.getSummary());
console.log(book7.getAge());

// ES6-2015
"use strict"
// Var Let Const
var a = 'test1';
let b = 'test2';
console.log(a);
console.log(b);

function testVar() {
    var a = 30;
    if (true) {
        var a = 50;
        console.log(a);

    }
    console.log(a);
}
testVar();

function testLet() {
    let a = 30;
    if (true) {
        let a = 50;
        console.log(a);
    }
    console.log(a);
}
testLet();
for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);
for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);

// Can't Change The Value
const colors = [];
colors.push('red');
colors.push('blue');
colors.push('black');
console.log(colors);

// Class and Inheritance
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    registrar() {
        console.log(this.username + " is now registered");
    }
    static countUser() {
        console.log("There are 50 user");
    }
}
// Static Method Don't Need To Instantiated
User.countUser();
let bob = new User('Bob', 'bob@email.com', 12345);
bob.registrar();

// Inheritance
class Member extends User {
    constructor(username, email, password, memberPackage) {
        super(username, email, password);
        this.memberPackage = memberPackage;
    }
    getPackage() {
        console.log(this.username + " is subscribed to " + this.memberPackage + " Package");
    }
}
let mike = new Member('Mike', 'mike@email.com', 45657, 'Standard');
mike.registrar();
mike.getPackage();

// Template Literals
let nam = 'John';

function makeUpperCase(word) {
    return word.toUpperCase();
}
let template = `<h1>${makeUpperCase('Hello')}, ${nam}</h1>
<p>This is simple Template in javascript</p>`;
console.log(template);
// document.getElementById('template').innerHTML = template;

// New String and Number Methods
// New String Methods
let theString = 'Hello, My name is Murad and I hate Javascript';
console.log(theString.startsWith('Hello'));
console.log(theString.endsWith('Javascript'));
console.log(theString.includes('love')); //Is This word Available there? 

// New Number Methods
//  Hex
console.log(0xFF);
// Binary
console.log(0b101011);
// Octal
console.log(0o543);
console.log(Number.isFinite(NaN));
console.log(Number.isNaN(NaN));
console.log(Number.isInteger(4.5));

// Default Parameter and Spread Operator
function greet($greeting = 'Hello World') {
    console.log($greeting);
}
greet();

// Spread Operator
let args1 = [1, 2, 4];
let args2 = [3, 5, 7];

function test() {
    console.log(args1 + ',' + args2);
}
test(...args1, ...args2);

// Set, Map, WeakSet and WeakMap
// Set
let myArray = [11, 22, 34, 65, 34];
let mySet = new Set(myArray);
mySet.add(78);
mySet.add({
    a: 1,
    b: 2
});
mySet.delete(11);
// mySet.clear();
console.log(mySet.size);
mySet.forEach(function (value) {
    console.log(value);
});

// Map
let myMap = new Map([
    ['a1', 'hello'],
    ['b2', 'world']
]);
myMap.set('c3', 'I am javascript');
myMap.delete('c3');
console.log(myMap.size);
console.log(myMap);

// WeakSet
let carWeakSet = new WeakSet();
let car1 = {
    make: 'Toyota',
    model: 'Royal Crown'
};

let car2 = {
    make: 'Land Rover',
    model: 'Range Rover'
};
let car3 = {
    make: 'Honda',
    model: 'Civic Turbo'
};
carWeakSet.add(car1);
carWeakSet.add(car2);
carWeakSet.delete(car3);
console.log(carWeakSet);

// WeakMap
let CarWeakMap = new WeakMap();
let key1 = {
    id: 1
};
let car4 = {
    make: 'BMW',
    model: '7 Series'
};
let key2 = {
    id: 2
};
let car5 = {
    make: 'Toyota',
    model: 'Chaser'
};
CarWeakMap.set(key1, car4);
CarWeakMap.set(key2, car5);
CarWeakMap.delete(key1, car4);
console.log(CarWeakMap);


// Arrow Function
// Old Method
// function Prefixer(prefix){
//     this.prefix = prefix;
// }
// Prefixer.prototype.prefixArray = function(arr){
//     let that = this;
//     return arr.map(function(x){
//         console.log(that.prefix+x);
//     });
// }
// let pre = new Prefixer('Hello, ');
// pre.prefixArray(['David','John','Brad']);

function Prefixer(prefix) {
    this.prefix = prefix;
}
Prefixer.prototype.prefixArray = function (arr) {
    return arr.map((x) => {
        console.log(this.prefix + x);
    });
}
let pre = new Prefixer('Hello, ');
pre.prefixArray(['David', 'John', 'Brad']);

let add = (a, b) => a + b;
console.log(add(5, 6));

const todos = [{
        title: 'Buy Book',
        isDone: true
    }, {
        title: 'Go to gym',
        isDone: true
    },
    {
        title: 'Code Everyday',
        isDone: false
    }
];
const thingsDone = todos.filter((thing) => {
    return thing.isDone === true;
});
console.log(thingsDone);
// Module

// Module Loader
// Generators



// ES7-2016 || ES8-2017
// CallBacks
const posts = [{
        title: 'Post One',
        body: 'This is post One'
    },
    {
        title: 'Post Two',
        body: 'This is post Two'
    }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output = output + `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

// getPosts();
createPost({
    title: 'Post Three',
    body: 'This is post three'
}, getPosts);

// Promises
const blogs = [{
        name: 'Blog Post One',
        body: 'This is blog post one'
    },
    {
        name: 'Blog Post Two',
        body: 'This is blog post two'
    }
];

function getBlogPosts() {
    setTimeout(() => {
        let output = '';
        blogs.forEach((blog, index) => {
            output += `<li>${blog.name}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createBlogPost(blog) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            blogs.push(blog);
            const error = true;
            if (!error) {
                resolve();
            } else {
                reject('Error: Something Went wrong');
            }
        }, 2000);
    });
}

createBlogPost({
    name: 'Blog Post Three',
    body: 'This is blog post three'
}).then(getBlogPosts).catch(err => console.log(err));

// Asynchronous and Await Programming
async function init() {
    await createPost({
        title: 'Post Four',
        body: 'This is post four'
    });

    getPosts();
}
init();


async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();
    console.log(data);
}
fetchUsers();

const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
    setTimeout(resolve, 2000, 'Goodbye')
);
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));

// Array.prototype.includes()
// The includes() method determines whether an array includes a certain element, returning true or false as appropriate.

let array1 = [1, 2, 3];
console.log(array1.includes(2));
// Exponentiation operator
let p = 5;
let q = 2;
let r = p ** q;
console.log(r);
// console.log(Math.pow(5,2));


function UnableToProgram(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;

    this.getCommonInfo = function () {
        return `Name: ${name}, Age: ${age}, Profession: ${profession}`;
    }
}

UnableToProgram.prototype.isUnable = function (unable) {
    return unable;
}

function Why(name, age, profession, why) {
    UnableToProgram.call(this, name, age, profession);
    this.why = why;
    this.getWhy = function () {
        // console.log('Lack of Understanding, Give Less Time');
        return this.why;
    }
}
Why.prototype = Object.create(UnableToProgram.prototype);


const loser1 = new UnableToProgram('Murad', '25', 'Student');
console.log(loser1.getCommonInfo());
console.log(loser1.isUnable(true));
const loser2 = new Why('John', '40', 'Labour', 'Lack of Understanding');
console.log(loser2.getCommonInfo());
console.log(loser2.getWhy());

class Room {
    constructor(size, color, price) {
        this.size = size;
        this.color = color;
        this.price = price;
    }
    getRoomInfo() {
        return `Room Size: ${this.size}, Room Color: ${this.color}, Room Price: ${this.price}`;
    }
}

class Properties extends Room {
    constructor(size, color, price, table, bed, door, window) {
        super(size, color, price);
        this.table = table;
        this.bed = bed;
        this.window = window;
        this.door = door;
    }

    getRoomProperties() {
        super.getRoomInfo();
        return `Table: ${this.table}, Bed: ${this.bed}, Door: ${this.door}, Window: ${this.window}`;
    }
}

let room1 = new Room("200sqr Feet", "White", "20000");
console.log(room1.getRoomInfo());
let room1Properties = new Properties("250sqr-feet", "Yellow", "30000", "One Piece", "1 Bed", true, false);
console.log(room1Properties.getRoomProperties());