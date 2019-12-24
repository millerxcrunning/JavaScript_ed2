/*console.log('Hello World');
var firstName = "John";
var lastName = "Smith";
var age = 25;

console.log(firstName + " " + age);

var job, isMarried;
job="teacher";
isMarried=false;

console.log(firstName + " is " + age + " years old and is he married? " + isMarried)

//alert(firstName + isMarried);
//var country = prompt("what is his native country?");
//alert(country);

/*************************************************************************** 
OPERATORS
************************************************************************** */
/*
ageJohn = 28;
ageMark = 33;
var now = 2020;
var yearJohn = now-28;
var yearMark = now-33;
var ofAge = 21;
console.log(yearJohn);

var johnOlder = ageJohn > ageMark;
console.log("is John older? " + johnOlder);

console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "Hello");
/*************************************************************************** 
OPERATOR PRECEDENCE
************************************************************************** */
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

var isOfAge = now - yearJohn >= ofAge;
console.log(isOfAge);

//MULTIPLE ASSIGNMENTS  
var x, y;
x = y = (3 + 5) * 4 - 6; //26
console.log(x, y); // prints out both values of both variables seperated with just a space
// 2 + 4 + 5 ... addition operator works left to right
// assignment operators work right to left though, hence why x = y = value works above

x = x * 2;
x*=2;
//both of the above statements are equivalent

x +=10;
x++;
++x;
//console.log(x++); //incriments x after all operations are finished in statement 
//console.log(++x); //incriments x before any other operations in statement
//console.log(x+=1); // x = x + 1, and then proceeds with other operations, such as console.log

/*************************************************************************** 
CODING CHALLENGE 1
****************************************************************************
 
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2. (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀

*/
/*
var marksHeight = prompt("What is Mark's height?");
var marksMass = prompt("What is Mark's weight?");
var johnsHeight = prompt("What is John's height?");
var johnsMass = prompt("What is John's weight?");

var markBMI = marksMass / (marksHeight * marksHeight);
var johnBMI = johnsMass / (johnsHeight * johnsHeight);

var markBMILessThanJohn = markBMI < johnBMI;

alert("Is Mark's BMI higher than John's? " + markBMILessThanJohn);
console.log("Is Mark's BMI higher than John's? " + markBMILessThanJohn);

/*************************************************************************** 
 IF/ELSE
***************************************************************************/
/*
var lastName = "Brady";
var employed = "currently";

//strict type checking
if(employed === "currently")
{

}

var marksHeight = prompt("What is Mark's height?");
var marksMass = prompt("What is Mark's weight?");
var johnsHeight = prompt("What is John's height?");
var johnsMass = prompt("What is John's weight?");

var markBMI = marksMass / (marksHeight * marksHeight);
var johnBMI = johnsMass / (johnsHeight * johnsHeight);

var markBMILessThanJohn = markBMI < johnBMI;

if(markBMILessThanJohn) console.log("Mark's BMI higher than John's");
else console.log("John's BMI is higher than John's");

/*************************************************************************** 
TERNARY OPERATOR & SWITCH BLOCKS
***************************************************************************/

var firstName = "John";
var age = 22;

//test condition ? if true : if false;
age >=18 ? console.log(firstName + " is a man") : console.log(firstName + " is a boy");

// test condition ? if true : if false;
var hasACareer = age >= 18 ? "has a career" : "does not have a career";
console.log(hasACareer);

//TRUTHY AND FALSY VALUES

// falsy values: undefined, null, "", 0, NaN

var height;
//    test case        ?      if true                        :        if false
height || height === 0 ? console.log(height + " is defined") : console.log(height + " is not defined");

var job = "cop";
switch(job)
{
    case "teacher":
        console.log(firstName + " teaches kids to code");
        break;
    case "driver":
        console.log(firstName + " drives an uber.");
        break;
    default:
            console.log("We don't know what " + firstName + " does for a job.");
    
}

//EQUALITY OPERATORS

if (height == "23")
{
    // JavaScript converts the string "23" to a number and then compares the numbers 23 & 23
    console.log("The == operator does type coercion");
}



//test condition?    if true (test condition     if true : if false) : if false
height == "23" ? (height === "23" ? console.log("height == \"23\" and height === \"23\"") : console.log("height == \"23\" but height !== \"23\"")) : console.log("height != \"23\"");


/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀


var avgScoreJohnTeam = prompt("What are the points scored by John's team in the three latest basketball games? First game: ") + 0 + prompt("Second game? ") + 0 + prompt("Third game? ");

alert(typeof avgScoreJohnTeam);

*/

/*************************************************************************** 
FUNCTIONS
***************************************************************************/
/*
function calculateAge(birthYear)
{
    return 2020 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1988);
var ageMark = calculateAge(1992);
var ageLuke = calculateAge(1985);

console.log(ageJohn, ageMike, ageMark, ageLuke);

function yearsUntilRetirement(yearOfBirth, firstName)
{
    var age = calculateAge(yearOfBirth);
    var retirement = 65 - age;
    retirement > 0 ? console.log(firstName + " retires in " + retirement + "years") : console.log(firstName + " is already retired");
}

yearsUntilRetirement(1940, "John");
*/

//FUNCTION DECLARATION
/* function whatDoYouDO(job, firstName)
{

}


//FUNCTION EXPRESSION
var whatDoYouDo = function(job, firstName)
{
    switch (job){
        case "teacher":
            return firstName + " teaches kids to code";
        case "driver":
            return firstName + " drives for uber";
        default:
            return firstName + "does something else";
    }
}

console.log(whatDoYouDo("teacher", "John"));
console.log(whatDoYouDo("driver", "Mark"));
console.log(whatDoYouDo("retired", "Luke"));

// JavaScript expressions always produce a single immediate result or value
// JavaScript statements perform actions
//  don't produce a single immediate result or value
*/
/*************************************************************************** 
ARRAYS
***************************************************************************/
/*
var names = ["John", "Mark", "Jane"];
var names2 = new Array("Mary", "Martha", "Jessica");

console.log(names[0]);
console.log(names);
names[4] = "Jeremy";
console.log(names);
var john = ["John", "Smith", 1992, "teacher", "false"];

john.push("blue");
john.unshift("Mr."); //adds to the beginning of the array
console.log(john);
john.pop(); //remove from end
john.shift(); //remove from the beginning
console.log(john.indexOf(1992));
console.log(john.indexOf("designer") === -1 ? "John is not a designer" : "John is a designer");

/*****************************
* CODING CHALLENGE 3
******************************


John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀

var tipArray = [];
var paidAmounts = [];

var bill1 = 124;
var tip1 = calculateTip(bill1);
var total1 = calculateTotal(bill1, tip1);

//tipArray.push(tip1);
//paidAmounts.push(total1);

var bill2 = 48;
var tip2 = calculateTip(bill2);
var total2 = calculateTotal(bill2, tip2);

//tipArray.push(tip2);
//paidAmounts.push(total2);

var bill3 = 268;
var tip3 = calculateTip(bill3);
var total3 = calculateTotal(bill3, tip3);

//tipArray.push(tip3);
//paidAmounts.push(total3);

var billArray = [bill1, bill2, bill3];
for(var index = 0; index < billArray.length; index += 1)
{
    console.log(billArray[index]);
    console.log(calculateTip(billArray[index]));
    var tempTip = calculateTip(billArray[index]);
    tipArray.push(tempTip);
    console.log((calculateTotal(billArray[index], tempTip)));
    paidAmounts.push(calculateTotal(billArray[index], tempTip));
}
console.log("the tips are: " + tipArray);
console.log("the total paid amounts are: " + paidAmounts);


/****************************************
 You should use if-else for intervals
 Not as I have done here with a switch
****************************************/
/*function calculateTip (bill)
{
    console.log("in");
    switch(bill)
    {
        case (bill < 50):
        {
            console.log("a");
            return bill * .2;
        }

        case (bill >= 50 && bill <= 200):
        {
            console.log("b");
            return bill * .15;
        }

        case (bill > 200):
        {
            console.log("c");
            return bill * .1;
        }
    }
}*/
/*
function calculateTip (bill)
{
    if (bill <50)
        return bill * .2;
    if (bill >= 50 && bill <= 200)
        return bill * .15;
    else if (bill > 200)
        return bill * .1;
    else return NaN;
}

function calculateTotal(bill, tip)
{   
    return bill + tip;
}
*/

/*************************************************************************** 
OBJECTS
***************************************************************************/

//OBJECT LITERAL uses defining with curly braces

var john = {
    //key       value  pair
    firstName: "John", 
    lastName: "Smith", 
    birthYear: 1995, 
    family: ["Mark", "Bob", "Sam"],
    job: "teacher",
    isMarried: "false"
}
console.log(typeof(john["isMarried"]));

console.log(john.firstName);
console.log(john["lastName"]);

john.job = "construction worker";
//changing isMarried from string type to boolean type
john["isMarried"] = true;
console.log(typeof(john["isMarried"]));

console.log(john.job);
console.log(john["isMarried"]);

//NEW OBJECT notation

var jane = new Object();
jane.lastName = "Arial";
jane.birthYear = 1989;
jane.isMarried = true;
jane["firstName"] = "Jane";
console.log(jane);