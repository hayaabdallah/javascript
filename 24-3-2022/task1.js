
/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/

let haya = { Fname: "haya", Lname: "Abdallah", age: 22, dob: "21-8-1999", Ff: ["pasta", "burger", "zinger"], fmovie: ["cruella", "the call", "catch me"] };
console.log(haya);

/*
2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides

Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
*/
var persons = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];




function firstName(persons)
{
 
  let arr3=[];
  for(i=0;i<persons.length;i++)
  {
    arr3[i]= persons[i].name.first;


  }

return arr3;

}

console.log(firstName(persons));


/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons

Ex: averageAge(persons) => 41.2
*/


let sum=0;
function averageAge(persons)
{

  for(i=0;i<persons.length;i++)
  {

    sum+=persons[i].age;
  }
return sum/persons.length;

}

console.log(averageAge(persons));


/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person

Ex: olderPerson(persons) => "Soso Al-Amora"
*/

function olderPerson(p) {

  var x= p[0].age;
  var index=1;
  for(i=0;i<5;i++)
  {
   if(p[i].age>x)
   {

      index=i;
      x=p[i].age;
   }

  } 
console.log(p[index].name.first+ " "+p[index].name.last);
}

olderPerson(persons);



/*
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/

function longestName(persons)
{
   var full;
   var x=persons[0].name.first + " "+persons[0].name.last;
   for(i=0;i<5;i++)
  {full=persons[i].name.first + " "+persons[i].name.last;
       if(full.length>x.length)
    {
    
    x=full;
    }
  }
  console.log(x);
}

longestName(persons);


/*
6
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/
function longestName(persons)
{
   var full;
   var x=persons[0].name.first + " "+persons[0].name.last;
   for(i=0;i<5;i++)
  {full=persons[i].name.first + " "+persons[i].name.last;
       if(full.length>x.length)
    {
    
    x=full;
    }
  }
  console.log(x);
}

longestName(persons);


//////////////////////////////////////////////////////////////////

/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??

Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
  my:1,
  name:2,
  is:1,
  alex:1,
  mercer:1,
  class:1,
  b:1,
  baba:1,
  mama:1,
  hello:3
}
*/

function repeatWord(string)
{
   let str=string.toLowerCase().split(" ")
   let obj={};
   for(i=0;i<str.length;i++)
   {
      if(obj[str[i]]==undefined)
        obj[str[i]]=1;
        else
        obj[str[i]]++;
   }
  return obj;
}

console.log(repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO"));

/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??

Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/


function repeatChar(string)
{
    let wor=string.split("");
    let ob={};
    for(i=0;i<wor.length;i++)
    {

      if(ob[wor[i]]==undefined)
         ob[wor[i]]=1;
         else
         ob[wor[i]]++;

    }

return ob;
}

console.log(repeatChar("mamababatetacedo"));

/*
9
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array

Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
=>  {a: 1, cat: 3}
*/


function selectFromObject(ob,ar)
{
  
console.log( "{"+ar[0] +":"+ ob.a +","+ar[1]+":"+ ob.cat+"}");

}
var array=['a', 'cat', 'd'];
var obj={a: 1, cat: 3};
selectFromObject(obj,array)