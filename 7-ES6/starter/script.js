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

function checkScope() {
    'use strict';
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }
  
  console.log(checkScope());

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

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
/*find properties named today and tomorrow in the object HIGH_TEMPERATURES and assign their values to variables of the same names. That is what destructuring of objects is. You are selecting specific properties from an object and assign the values of those object properties to variables of the same names.*/
const {today, tomorrow} = HIGH_TEMPERATURES;
  
  

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

function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
      return [];
    } else {
      const countArray = rangeOfNumbers(startNum + 1, endNum);
      countArray.unshift(startNum);
      return countArray;
    }
  };
  
  console.log(rangeOfNumbers(1, 5));

  var twoSumV1 = function(nums, target) {
    for(let i = 0; i < nums.length-1; i+=1)
        {  
            console.log(`i = ${i} `);
            for (let j = 1; j < nums.length; j+=1)
                {
                    if( i !== j)
                    {
                        console.log(`target is ${target}, i = ${i}, j = ${j}, adding ${nums[i]} + ${nums[j]} = ${nums[i] + nums[j]} `);
                        if ((nums[i] + nums[j]) === target) return [i, j]; 
                    }
                }
        }
};

const twoSumV2 = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
    
    return [];
  };

console.log("twoSumV1 results = " , twoSumV1([2, 7, 11, 15], 9 ));
console.log("twoSumV1 results = " , twoSumV1([2, 5, 5, 11], 10 ));

console.log("twoSumV2 results = " , twoSumV2([2, 7, 11, 15], 9 ));
console.log("twoSumV2 results = " , twoSumV2([2, 5, 5, 11], 10 ));

// leetcode addTwoNumbers
// how do you pass the two linkedLists into the function??
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    console.log(l1);
    console.log(l1.next);
};

console.log(addTwoNumbers([2, 4, 3],  [5, 6, 4]));

var runningSumV2 = function(nums) {
    let total = [];
    total[0] = nums[0];
    for(let i = 1; i < nums.length; i +=1)
        {
            if(total[i-1] === undefined) total[i] = nums[i];
            total[i] = total[i-1] + nums[i];
            console.log("nums[" + i + "]", nums[i]);
            console.log("adding " + total[i-1] + " + " + nums[i]);
            console.log("total", total);
            console.log("total[" + i + "]", total[i]);
            console.log("total[" + i + "-1]", total[i-1]);
            console.log("\n");
            
        }
    return total;
};

console.log("runningSumV2 returns ", runningSumV2([1,2,3]));
console.log("runningSumV2 returns ", runningSumV2([1,2,3,4,5,6]));

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let good = 0;
    for (let i = 0; i < nums.length-1; i+=1)
    {
        for(let j = 1; j < nums.length; j+=1)
        {
            console.log("nums[" + i + "] = " + nums[i] + ", nums[" + j +"] = " + nums[j]);
            if((nums[i] === nums[j]) && (i < j)) 
            {
                good += 1;
                console.log(good);
            }
        }
    }
    return good;
};

console.log(numIdenticalPairs([1,2,3,1,1,3]));