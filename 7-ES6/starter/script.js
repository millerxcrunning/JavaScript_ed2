//let & const

function driversLicenseES5(passedTest){
    if (passedTest)
    {
        //ES5 "var" keyword is function scoped

        var firstName = "John";
        var lastName = "Smith";
        var yearOfBirth = 1990;
    }

    console.log(firstName + ", born in " + yearOfBirth + ", can now drive cars.");

}

driversLicenseES5(1);

function driversLicenseES6(passedTest){
    if (passedTest)
    {
        //ES6 "let" & "const" are blocked scoped

        const firstName = "John";
        const lastName = "Smith";
        let yearOfBirth = 1990;
    }

    //console.log(firstName + ", born in " + yearOfBirth + ", can now drive cars.");

}

driversLicenseES6(1);

// Blocks & IIFES
//Up until ES6, use IIFES to ensure data privacy
// Now, use blocks to create data privacy
{
    const a = 1;
    let b = 2;
    var d = 4;
}

// console.log(a + b); // will not work because the const & let are block scoped
console.log(d);

//ES5 IIFE data privacy

(function() {
    var c = 3;

    return console.log("c is " + c);
})();

// Strings (Template Literals in ES6, designated by ` & ${} )

let meFirst = "Mike";
let meLast = "Miller";
let says = "Hello";

console.log(`Hello from ${meFirst} ${meLast}. He says ${says}.`);

// String methods

const n = `${meFirst} ${meLast}`;

console.log(n);
console.log(n.startsWith("J"));
console.log(n.endsWith("er"));
console.log(n.includes(" "));
console.log(`${n} `.repeat(5));

// Arrow Functions
//they use the "this variable of the surrounding code it is part of. They do not have their own."

const years = [1990, 1982, 1975, 1995];

//ES5
var agesES5 = years.map(function(el)
{
return 2020 - el;
});

console.log(agesES5);

let agesES6 = years.map(e => e + 5);

console.log(agesES6);

agesES6 = years.map(e => 2020 - e);

console.log(agesES6);

agesES6 = years.map((e, i) => `Element ${i +1} is age ${2020 - e} `);

console.log(agesES6);

var box5 = {
    color: "white",
    position: 1,
    clickMe: function()
    {
        var that = this;
        document.querySelector('.green').addEventListener('click', function()
        {
            var str = "This is box number " + that.position + " and it is " + that.color;
            alert(str);
        })
    } 
}

box5.clickMe();

const box6 = {
    color: "green",
    position: 1,
    clickMe: function()
    {
        document.querySelector('.green').addEventListener('click', () =>
        {
            let str = "This is box number " + this.position + " and it is " + this.color;
            alert(str);
        })
    } 
}

box6.clickMe();

function Person(name)
{
    this.name = name;
}

Person.prototype.myFriends = 
function(friends)
{
    const arr = friends.map(e => `${this.name} is friends with ${e} `);

    console.log(arr);
}

var friends = ["Bob", "Michael", "Ashley", "Mark", "Kristen"];

new Person("John").myFriends(friends);

let mike = new Person("Mike");

mike.myFriends(friends);

//Destructuring in ES6

const [name, age] = ["John", 26];

console.log(name, age);

const obj = {
    firstName: "John",
    lastName: "Smith"
};

const {firstName, lastName} = obj;

console.log(firstName);
console.log(lastName);

function calcRetirementAge(year)
{
    const age = new Date().getFullYear - year;
    return [age, 65 - age];
}

const [age2, retirement] = calcRetirementAge(1990);
console.log(age2);
console.log(retirement);

const boxes = document.querySelectorAll('.box');

//ES5

/*var boxesArrES5 = Array.prototype.slice.call(boxes);
/*boxesArrES5.forEach(function(curr){
    curr.style.backgroundColor = 'dodgerblue';
})

for(var i = 0; i < boxesArrES5.length; i+=1)
{
    if(boxesArrES5[i].className !== 'box blue')
    {
        boxesArrES5[i].textContent = "I changed to blue!";
    }
}
*/

//ES6

const boxesArrES6 = Array.from(boxes);
boxesArrES6.forEach( e => e.style.backgroundColor = 'dodgerblue');
//alert("changed all boxes to blue");
for(const curr of boxesArrES6)
{
    if(!(curr.className.includes('blue')))
    {
        let temp = curr.className.slice(3);
        curr.textContent = "I changed from " + temp + " to blue!";
    }
}

//ES5

var ages = [12,3,5,8,21,56];

var isAdult = ages.map(function(curr)
{
    return curr >= 18;
});

console.log(isAdult);
console.log(isAdult.indexOf(true));

//ES6 find & findIndex methods

console.log("of the people in the array, position ", ages.findIndex(e => e >=18), " is an adult");
console.log("of the people in the array, position ", ages.findIndex(e => e >=18), " is an adult", "and is ", ages.find(e => e >=18), "years old.");

let a = ['a', 'b', 'c'];
console.log(...a);