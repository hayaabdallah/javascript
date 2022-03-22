


/* 1. Write a JavaScript program that accept two integers and
 * display the larger. Go to the editor */
/******* Start Your Code *********/


let num1 = window.prompt("Enter a number: ");;
let num2 = window.prompt("Enter a aonther number: ");
if (num1 > num2)
    document.write(num1);
else
    document.write(num2);


/******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/

var x = 3;
var y = -7;
var z = 2;
if (x > 0 && y > 0 && z > 0) {
    alert("The sign is +");
}
else if (x < 0 && y < 0 && z < 0) {
    alert("The sign is -");
}
else if (x > 0 && y < 0 && z < 0) {
    alert("The sign is +");
}
else if (x < 0 && y > 0 && z < 0) {
    alert("The sign is +");
}
else {
    alert("The sign is -");
}

/******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/


var n1 = 0;
var n2 = -1;
var n3 = 4;
var arr = [];
if (n1 > n2 && n1 > n3) {

    if (n2 > n3)
        console.log(n1 + "," + n2 + "," + n3);
    else
        console.log(n1 + "," + n3 + "," + n2);
}
else if (n2 > n1 && n2 > n3) {
    if (n1 > n3)
        console.log(n2 + "," + n1 + "," + n3);
    else
        console.log(n2 + "," + n3 + "," + n1);
}
else if (n3 > n1 && n3 > n2) {
    if (n1 > n2)
        console.log(n3 + "," + n1 + "," + n2);
    else
        console.log(n3 + "," + n2 + "," + n1);
}

/******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/


var x = -5;
var y = -2;
var z = -6;
var a = 0;
var b = -1;

if (x > y && x > z && x > a && x > b)
 {   console.log(x);}
else if (y > x && y > z && y > a && y > b)
   { console.log(y);}
else if (z > x && z > y && z > a && z > b)
   { console.log(z);}
else if (a > x && a > y && a > z && a> b)
  {  console.log(a);}
else
{    console.log(b);}

   
/******* End Your Code ********* */

/* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/


var x=4;
var y=2;
if(x>y)
   console.log("hello world");
   else
     alert("goodbye");
     
/******* End Your Code ********* */



