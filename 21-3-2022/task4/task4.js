/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/


function tellFortune(num, pname, loc, title) {

    console.log("you will be a" + title + "and married to" + pname + "with" + num + "kids");

}


/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/


function calculateDogAge(age) {

    let a = age * 7;
    console.log("your doggie is " + a + "years old in dog years!")

}


/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/

function calculateSupply(age, amount) {

    var supply = "yo will need" + age * amount * 365 + "cups of tea to last you until the ripe old age of " + age;
    return supply;
}


/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/

function greet(name) {

    var n = "hello" + name;
    return n;

}


/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/
function double(cat) {
    return 2 * x;
}

function double(cat) {
    return 2 * 7;
}

function double(cat) {
    return 2 * 'x';
}



/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/

function double1(x) {
    return 2 * x;
}

function double2(x) {
    return 2 * x;
}

function double3(x) {
    return 2 * x;
}

/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube(num) {

    var cube = num * 3;
    return cube;

}


/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/

function multiply(a, b) {

    var mult = a * b;
    return mult;

}


/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/

function canIGetADrivingLicense(age) {

    if (age >= 20)
        console.log("yes you can ");
    else
        console.log("please come back after X years to get one");

}


/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
function sameLength(str1, str2) {
    if (str1.length == str2.length)
        return true;
    else
     return false;

}



/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/

function largerNubmer(a,b)
{

if(a>b)
return a;
else return b;

}


/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/

function smallerNubmer(a,b,c)
{
if(a<b && a<c)
  return a;
  else if(b<a && b<c)
  return b;
  else 
  return c;

}

/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/

function shorterString(x,y,z,a,b)
{

    if (x.length < y.length && x.length < z.length && x.length < a.length && x.length < b.length)
 {   console.log(x);}
else if (y.length < x.length && y.length < z.length && y.length < a.length && y.length < b.length)
   { console.log(y);}
else if (z.length < x.length && z.length < y.length && z.length < a.length && z.length < b.length)
   { console.log(z);}
else if (a.length < x.length && a.length < y.length && a.length < z.length && a.length< b.length)
  {  console.log(a);}
else
{    console.log(b);}

}

/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/

function longerString(a,b,c,d)
{
    if (x.length > y.length && x.length > z.length && x.length > a.length && x.length > b.length)
 {   console.log(x);}
else if (y.length > x.length && y.length > z.length && y.length > a.length && y.length > b.length)
   { console.log(y);}
else if (z.length > x.length && z.length > y.length && z.length > a.length && z.length > b.length)
   { console.log(z);}
else if (a.length > x.length && a.length > y.length && a.length > z.length && a.length > b.length)
  {  console.log(a);}
else
{    console.log(b);}

}

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/

function isEven(num)
{
  if(num%2==0)
   return true;
   else 
   return false;
}


/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isOdd(num)
{
  if(num%2!=0)
   return true;
   else 
   return false;
}


/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(num)
{

    let reult=  Math.abs(num);
    return num;

}


/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/

function fullName(fname,lname)
{
   
var x=fname+ " "+lname;
return x;

}


/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/

function average(a,b,c,d,e)
{
  var avg=a+b+c+d+e/5;
  return avg;

}


/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber()
{
   return  Math.random();
}

/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
function randomBetweenNumbers(n1,n2)
{
    
    return Math.floor(Math.random() * (n2 - n1 + 1) + n1);
}


/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/

function scoreInUniversty(grade)
{
    switch(true)
    {
     case grade>=90 && grade<=100:
         console.log("A");
         break;
     case grade>=80 && grade<=89:
         console.log("B");
         break;

    case grade>=70 && grade<=79:
         console.log("C");
         break;
    case grade>=60 && grade<=69:
         console.log("D");
         break;
    case grade>=50 && grade<=59:
         console.log("E");
         break;
   default:
         console.log("Fall");
      
    }
}

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/


function counter()
{
var count=0;
count++;
return count;
}


/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
function resetCounter()
{
    res = count + ' and the counter rest now';
    count = 0;
    return res;


}
