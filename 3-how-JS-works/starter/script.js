/**************************************
EXECUTION CONTEXT
***************************************
// Lecture: Hoisting

// the following code block works because the function being accessed is a function
// declaration. 
// In the creation phase of the execution context, the function declaration calcAge is stored in the variable object even before the code is executed. Then when we enter the execution phase, the calcAge function is already 
//available for us to use, so you don't have to declare it in code before calling the function. The whole of the document is scanned for function declarations in the creation phase at the beginning.
calcAge(1988);

function calcAge(year)
{
    console.log(2020 - year);
}

// Hoisting only works with function declarations and not function expressions,
// so the following code will not work.

//retirement(1988);

var retirement = function (year)
{
    console.log(65-(2020-year));
}

// VARIABLES

// in creation phase of the variable object, the code is scanned for variable declarations,
// and the variables are then set to UNDEFINED

// javascript knows there will be an age variable, it just doesn't know the value when it gets to the next line.
// Therefore, this next console.log() will produce UNDEFINED.
console.log(age);
var age = 23;
console.log(age);

function foo()
{

    var age = 65;
    console.log(age);
}

foo();
console.log(age);

// the first age variable gets stored in the global execution context object
// in the variable obect of the global execution context object.

// the foo function gets its own execution context object in which this inner age 
// variable is stored.

/**************************************
SCOPE
***************************************

// Scope Chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/

// !function third() can only access variables a & d!



/**************************************
The this keyword
***************************************/

// It is stored in the execution context object, which is 
// only created when that function is invoked (called).

// the Window object is the default object
console.log(this);

calcAge(1985);

// the object that this function is attached to is the global object
function calcAge(year)
{
    console.log(2020 - year);
    console.log(this);
}

var john = 
{
    name: "John Smith", 
    yearOfBirth: 1980,
    calculateAge: function()
    {
        console.log(this);
        this.age = 2020 - this.yearOfBirth;
        console.log(this.age);

        // this keyword refers to the global window object because it is a normal function call, not 
        // attached to the john object, even though it is inside the object.
        function inner()
        {
            console.log(this);
        }
        inner();
    }
};

john.calculateAge();

var mike = 
{
    name: "Mike Miller",
    yearOfBirth: 1992

};

// omit the parentheses because parentheses are for calling the methods.
mike.calculateAge = john.calculateAge;
// When we call the calculateAge method from the mike object, the "this" points to the mike object, because 
// the "this" keyword is only assigned a value when the object calls the method.
mike.calculateAge();






