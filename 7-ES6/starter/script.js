/*

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

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
/*find properties named today and tomorrow in the object HIGH_TEMPERATURES and assign their values to variables of the same names. That is what destructuring of objects is. You are selecting specific properties from an object and assign the values of those object properties to variables of the same names.*/
//const {today, tomorrow} = HIGH_TEMPERATURES;
  
  

//const boxes = document.querySelectorAll('.box');

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
/*
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
*/
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
/*
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
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
/*
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
*/
/**
 * Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn].

 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
/*
var shuffle = function(nums, n) {
    let newArray = [];
    let j = n;
    console.log("original array = " + nums);
    for(let i = 0; i < n; i += 1)
    {
        newArray.push(nums[i]);
        newArray.push(nums[j]);
        console.log("nums[i] = " + nums[i]);
        console.log("nums[j] =" + nums[j]);
        console.log('newArray = ' + newArray);
        console.log("i = " + i + " and j = " + j );
        j+=1;

    }
    return newArray;
};

console.log(shuffle([1,4,6,2,5,7], 3));
*/
/*Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.*/
/*
var kidsWithCandies = function(candies, extraCandies) {
    let yesOrNo = [];
    let max = Math.max(...candies);
    console.log("max value of candies array is " + max);
    //for (let e of candies) {
    candies.forEach(e => {
        if(e + extraCandies >= max) yesOrNo.push(true);
        else yesOrNo.push(false);
        console.log("return array is currently " + yesOrNo);
    });
    return yesOrNo;
};

console.log(kidsWithCandies([1,2,3,4,5,1,2,3], 1));
*/
/**
 * Given a valid (IPv4) IP address, return a defanged version of that IP address. A defanged IP address replaces every period "." with "[.]"
 * @param {string} address
 * @return {string}
 */
/*
var defangIPaddr = function(address) {
    return address.replace(/\./g,"[.]");
};

console.log(defangIPaddr("1.5.196.101.8"));
*/
/**
 * Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
 * @param {number} num
 * @return {number}
 */
/*
var numberOfSteps  = function(num) {
    let i = 0;
    console.log("num is originally " + num);
    for (; num !== 0; i +=1)
    {
    ((num % 2) === 0) ? (num = num / 2) : (num = num - 1);
    console.log("num is now " + num + " after " + (i+1) + " steps");
    }
    return i;
};

console.log(numberOfSteps(8));
*/
/**
 * You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
/*
var numJewelsInStones = function(J, S) {
    let matches = 0;
    for(let currJ of J)
    {
        for(let currS of S)
        {
            if(currJ === currS) 
            {
                matches +=1;
                console.log(currJ + " matches " + currS);
                console.log("number of matches is now " + matches);
            }
        }
    }
    return matches;
};

console.log("number of matches is " + numJewelsInStones("aA", "aAAbbb"));
*/
/**
 * Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i]. Return the answer in an array.
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    console.log("original array is " + nums);
    let matches = [];
    for(let i = 0; i < nums.length; i +=1)
    {
        for(let j = 0; j < nums.length; j +=1)
        {
            if(i === j) break;

            else 
            {
                if (nums[i] < nums[j]) 
                {
                    matches[i] +=1;
                    console.log(nums[i] + " is less than " + nums[j]);
                    console.log("how many smaller at each position is now " + matches);
                }
            }
        }
    }
    return matches;
};

console.log("how many smaller at each position is " + smallerNumbersThanCurrent([8,1,2,2,3]));
/*
// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

//This function should add a book to the list and return the list 
// New parameters should come before the bookName one

// Add your code below this line
function add (bookList, bookName) {
  console.log("\nadding: " + bookName);
  let bookListCopy = [...bookList];
  //let bookListCopy = bookList.concat();
  //let bookListCopy = JSON.parse(JSON.stringify(bookList));
  console.log("bookListCopy is: \"" + bookListCopy + "\" before adding");
  bookListCopy.push(bookName);
  console.log("bookListCopy is: \"" + bookListCopy + "\" after adding");
  return bookListCopy;
  // Add your code above this line
}

console.log(add(bookList, "hello"));
*/
/**
 * Given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string. Return the shuffled string.
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
/*
var restoreString = function(s, indices) {
    let newArr = [...s];
    console.log(s);
    console.log(newArr);
    let newArr2 = [];
    for (let i = 0; i < indices.length; i +=1)
    {
        newArr2[indices[i]] = newArr[i];
        console.log(newArr2);
    }

    console.log(newArr2.toString());
    console.log(newArr2.join(""));
    return newArr2.join("");
};

console.log(restoreString("codeleet", [4,5,6,7,0,1,2,3]));
*/