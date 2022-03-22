console.log('Here is : ', 'array')



/*
1
Correct the syntax error
[ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/

let arr1 = [1, 7, 9, 45];
let arr2 = ["str", "alex", "moh"];
let arr3 = ['the', 'fox', 'over', 'lazy', 'dog']


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
let fruits = ["Tomato", "Banana", "Watermelon"];
console.log("tomato at index 0", fruits[0]);
console.log("banana at index 1", fruits[1]);

/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
let favfood = ["pasta", "Dawalli", "fototccine", "pizza", "burger"];
let favspo = ["walk", "runing", "tennis"];
let favmovie = ["cruella", "the call", "catch me if you can", "twy light"];

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
let num = ["t", "u", "g", "x"];
function firstOfArray(x) {
    return num[0];

}
firstOfArray(num);

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
let last = ["t", "u", "g", "x"];
function lastOfArray(x) {

    return num[3];
}

lastOfArray(num);
/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/

var array = [0, 5, 7, 9];
array.shift();
array.shift();
array.shift();
array.unshift(1, 3, 4, 6, 8);
array.push(10);
console.log(array);


/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var array2 = [5, 9, -7, 3.5];
array2.pop();
console.log("remove item form end of array", array2);
array2.push(2);
console.log("add item to the end of array", array2);
array2.shift();
console.log("Remove an item from the beginning of an array", array2);
array2.unshift(1);
console.log("Add items to the beginning of an array", array2);
/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/

let arr9 = [1, 4, 5];
function middleOfArray(arr9) {
    if (arr9.length % 2 == 0) {
        arr9 = [arr9[Math.ceil(arr9.length / 2)], arr9[Math.floor(arr9.length / 2)]];
        return arr9;
    } else {
        let b = arr9[Math.floor(arr9.length / 2)];
        return b;
    }
}

console.log(middleOfArray(arr9));

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/

var animals = ['cat', 'ele', 'bird'];
animals.shift();
if (animals[0] == 'ele')
    animals[0] = 'zebra';
else if (animals[1] == 'bird')
    animals[1] = 'zebra';
console.log(animals);

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/

let a = [1, 2, 3, 8, 9]
let i = 0;
function indexOfArray(a) {
    return a[i];

}
indexOfArray(a, i);


/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
let n = [1, 2, 3, 8, 9]
function arrayExceptLast(n) {
    n.pop();
    console.log(n);
}
arrayExceptLast(n);

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self

*/

let arr0 = [1, 2, 3, 8, 9];
function addToEnd(arr0, t) {
    arr0.push(t);
    console.log(arr0);

}

addToEnd(arr0, 5);


// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function sumArray(arr) {
    var count = 0;
    for (i = 0; i <= arr.length; i++) {
        count += arr[i];
    }
    console.log(count);

}
sumArray([1, 2, 3, 6]);


/*using while loop
function sumArray(arr)
{
var i=0;
var count=0;
while(i<=arr.length)
count+=arr[i];
console.log(count);
}
sumArray([1,5,6]);
*/

/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
let arrr = [1, 2, 3, 8, 9];
function minInArray(arrr) {

    let min = array[0];
    for (i = 1; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
        console.log(min);
    }
}
minInArray(arrr);

/*use while loop

let arrr = [1, 2, 3, 8, 9];
var i=0;
function minInArray(arrr) {
let min = array[0];
while(i<array.length)
{if (min > array[i]) {
            min = array[i];
}
  console.log(min);
}

minInArray(arrr);

*/

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
let arr7 = [1, 2, 3, 8, 9]
function removeFromArray(arr7, m) {
    for (i = 0; i <= arr7.length; i++)
        if (arr7[i] == m)
            arr7.slice(arr7[i], 1);
    return arr7;
}
removeFromArray(arr7, 8);


/* use while loop
let arr7=[1,2,3,8,9];
var i=0;
function removeFromArray(arr7,m)
{ while(i<=arr7.length)
       if(arr7[i]==m)
        arr7.slice(arr7[i],1);
         return arr7;
    }
removeFromArray(arr7,8);


*/
/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

var f = [1, 2, 3, 8, 9];
function oddArray(f) {
    let index = 0;
    let oddarr = [];

    for (let i = 0; i < f.length; i++) {

        if (f[i] % 2 != 0) {
            oddarr[index] = f[i]
            index++;
        }
    }
    return oddarr;
}
console.log(oddArray(f));


var f = [1, 2, 3, 8, 9];
let index = 0;
let oddarr = [];
i = 0;
function oddArray(f) {

    while (i < f.length) {
        if (f[i] % 2 != 0) {
            oddarr[index] = f[i];
            index++;
        }
        i++;
    }
}


/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function aveArray(arr) {
    var c = 0;
    for (let i = 0; i < arr.length; i++) {
        c += arr[i];
    }
    return c / arr.length;

}
console.log(aveArray([1, 2, 3, 8, 9]));


function aveArray(arr) {
    var c = 0;
    var i = 0;
    while (i < arr.length) {
        c += arr[i];
        i++;
    }
    return c / arr.length;
}


/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


function shorterInArray(arrr) {

    let min = arrr[0].length;
    var index = 0;
    var c = 0;
    for (i = 1; i < arrr.length; i++) {
        c = arrr[i].length; c = arrr[i].length;
        if (min > c) {

            min = c;
            index = i;
        }
    }
    return index;
}
arrr = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"]
console.log(arrr[shorterInArray(arrr)])


function shorterInArray(arrr) {

    let min = arrr[0].length;
    var index = 0;
    var c = 0;
    var i = 1;
    while (i < arrr.length) {
        c = arrr[i].length;
        if (min > c) {

            min = c;
            index = i;
        }

    }
    return index;
}

/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function repeatChar(s, c){
    count = 0;
    let i = 0;
    while(i < s.length){
        if(s[i] == c)
            count++;

        i++;
    }

    return count;
}


function repeatChar(s , c){
    count = 0;
    for(let i = 0; i < s.length ; i++){
        if(s[i] == c)
            count++;

        
    }

    return count;
}
var s= "alex mercer madrasa rashed2 emad hala"

console.log(repeatChar(s,"a"));

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function evenIndexOddLength(arr)
{
    let even=[];
    let ind=0;
    for(i=0;i<arr.length;i++)
    {
       if(arr[i].length%2!=0 && i%2==0)
          even[ind]=arr[i];
          ind++;
        
    }
return even;
}
evenIndexOddLength(["alex","mercer","madrasa","rashed2","emad","hala"]);


function evenIndexOddLength(arr)
{
    let even=[];
    let ind=0;
    var i=0;
    while(i<arr[i].length)
    {
       if(arr[i]%2!=0 && i%2==0)
          even[ind]=arr[i];
          ind++;
          i++;      
    }
return even;
}


/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function powerElementIndex(power) {

    for (i = 0; i < power.length; i++)
        power[i] = Math.pow(power[i], i);
    return power;

}
console.log(powerElementIndex([44, 5, 4, 3, 2, 10]));

function powerElementIndex(power) {
    var i = 0;
    while (i < power.length) {
        power[i] = Math.pow(power[i], i);
        i++;
    }

return power;

}

/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function evenNumberEvenIndex(arr)
{
    let even=[];
    let ind=0;
    for(i=0;i<arr.length;i++)
    {
       if(arr[i]%2==0 && i%2==0)
          even[ind]=arr[i];
          ind++;
        
    }
return even;
}
evenNumberEvenIndex([5,2,2,1,8,55,77,66,34,9,55,1]);

function evenNumberEvenIndex(arr)
{
    let even=[];
    let ind=0;
    var i=0;
    while(i<arr.length)
    {
       if(arr[i]%2==0 && i%2==0)
          even[ind]=arr[i];
          ind++;
          i++;      
    }
return even;
}