/*--------Title Case------------
// Code for Title Case i.e. First charachter of each word in Uppercase:
let nick="my name is rizwan riaz";
//split used for strings => array
let spl = nick.toLowerCase().split(" ");
//map used for array => array
let title = spl.map((each)=>each.charAt(0).toUpperCase()+each.slice(1).toLowerCase()) ;
// join array elements to string
let jo = title.join(" ");
//print
// console.log('Title Case = '+jo)  
*/


/*--------Sentence Case---------
// Code for Sentence Case i.e. First charachter of each sentence in Uppercase:
let input = "my name is rizwan riaz";
console.log(input.charAt(0).toUpperCase()+input.slice(1).toLowerCase())
*/


/* ----------- Template Literals / Template Strings-----------------
let nick = "Let's Go to "
let dest = "Naran"
console.log("Rizwan " + nick + dest + " to enjoy")
console.log(`Rizwan ${nick}${dest} to enjoy `) // usage of variables in this way is called template literals
*/


/*-----------interview questions---------------

console.log(8 / - "2")
*/


/*------------- Type annotation--------------
let nam :null = null
let check;
console.log(typeof(nam))
*/


/*-----------escape sequences---------------
\n      new line
\b      backspace
\v      vertical tab
\t      Horizontal tab
\'
\"
\\
\x      hexadecimal
\u      unicode
\r      carriage return (moves cursor to the begining of the line)
\f      used to advance the printer to the next page

*/
/*
let riz= "My name is Rizwan Riaz"
// console.log("\rMy name is \n\v\t\"Rizwan \bRiaz\" \x41")
console.log("My name is \nRizwan Riaz\r")
*/

// ---------------------------------------------------------------
/*

let persons:string[] = ["Imran","Ahmad","Emaad"]
console.log(persons.splice(1,1))
console.log(persons)

*/


/* let num = "3.5"
// let int = parseFloat(num)
console.log(Number.isInteger(parseFloat(num)))
 */


/* function riz(param2:any){
console.log(param2)

}

let hot = function(param2:any){
console.log(param2)
}

let cold = (param2:any)=>{
console.log(param2)    
}
 */
/* x=10
console.log(x); // undefined
var x; */

/* 
var x = 10;
x = 20;
console.log(x); // 20
 */
/* function foo() {
  console.log(y); // ReferenceError: x is not defined
  var y=30
}

foo()
 */
/* -------------- for taking input from terminal---------------
// Import the 'readline' module from Node.js
import * as readline from 'readline';

// Create an interface for reading from stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask for input
rl.question('Enter something: ', (input) => {
  console.log(`You entered: ${input}`);
  rl.close(); // Close the interface
}); */

/* 
 -------------dot vs bracket notation in object-------------
let run = {
    name:"Amjad",
    city: "lahore",
    country:"pakistan"
}

let coun = "country"

run["coun"] = "Kokjibjibjklachi"
console.log(run)
// console.log(run["coun"])
// console.log(run[coun])

 */

/* 
import inquirer from 'inquirer';

const name = inquirer.prompt({
  type: 'input',
  name: 'name',
  message: 'What is your name?',
});

console.log(`Hello, ${name}!`); */

/* 

type admin1 = {
 username: string,
 firstName: string,
 lastName: string,
 age:number
}

type admin2 = {  
  lastName: string,
  age:number
 }

//  type admin2 = {
//   welcome:"hy"

//  }

 type admin3 = {
  username: string,
  firstName: string, 
 }

 type combine = admin2 | admin3

let ad1:combine={
  // username:"Rizi",
  // firstName: "Rizwan",
  lastName: "Riaz",
  age:35,
  // govtServant: false

}
// console.log("🚀 ~ file: app.ts:166 ~ ad1:", ad1)




let ad2={
  username:"Rizi",
  firstName: "Rizwan",
  lastName: "Riaz",
  age:35,
  govtServant: false

}
//stain variable "ad1"
ad1 = ad2
// console.log("🚀 ~ file: app.ts:185 ~ ad1:", ad1)


let ad3:admin2={
  username:"Rizi",
  firstName: "Rizwan",
  lastName: "Riaz",
  age:35,
  // govtServant: false

}

interface Ball {
  diameter: number;
}
interface Ball {
  length: number;
}

let check:Ball = {
  diameter:10,
  length:2
}

interface Sphere {
  diameter: number;
}

let ball: Ball = { diameter: 10 };
let sphere: Sphere = { diameter: 20 };

sphere = ball;

ball = sphere;
// console.log("🚀 ~ file: app.ts:215 ~ sphere:", sphere)
// console.log("🚀 ~ file: app.ts:215 ~ ball:", ball)

interface Tube {
  diameter: number;
  length: number;
}

let tube: Tube = { diameter: 12, length: 3 };
// console.log("🚀 ~ file: app.ts:226 ~ ball:", ball)
//tube = ball;//Error
ball = tube;
// console.log("🚀 ~ file: app.ts:229 ~ ball:", ball)



var data: { id: number, [x: string]: any };//Note now 'x' can have any name, just that the property should be of type string

data = { id: 1, firstName: "Zia", lastName: 3 };  // Ok, `fullname` matched by index signature

// console.log("🚀 ~ file: app.ts:237 ~ data:", data)

let myType = { id: 2,  name: "Tom", age: 22 }

let myType2 = { id: 2,  name: "Tom" };

//Case 1
myType2 = myType; */


/* 
import { Date } from 'date-fns';

const startTime = new Date();

const countdownTimer = () => {
  const currentTime = new Date();
  const difference = currentTime - startTime;
  const hours = difference.getHours();
  const minutes = difference.getMinutes();
  const seconds = difference.getSeconds();

  console.log(`Time remaining: ${hours}:${minutes}:${seconds}`);

  setTimeout(countdownTimer, 1000);
};

countdownTimer();

 */

/*const enum rizi {a=4,"1",c}
console.log(rizi[5])
console.log(rizi["b"])
console.log(rizi.a) */
// 
// console.log("Hello Rizi")
import inquirer from "inquirer";

const students:string[] = ['Alice', 'Bob', 'Charlie'];

// type c1 = {
//   Alice: any,
//   Bob: any,
//   Charlie: any,
// }
const coursesByStudent = {
  Alice: ['Math', 'Science'],
  Bob: ['History', 'English'],
  Charlie: ['Physics', 'Chemistry'],
};

const studentQuestion = {
  type: 'list',
  name: 'student',
  message: 'Select a student:',
  choices: students,
};

const courseQuestion = {
  type: 'list',
  name: 'course',
  message: 'Select a course:',
  when: (answers:any) => answers.student, // Show this question when student is selected
  // choices: (answers:any) => coursesByStudent[answers.student],
  // when: (answers: { student: Student | undefined }) => !!answers.student,
  // choices: (answers: { student: Student | undefined }) =>
  //   answers.student ? coursesByStudent[answers.student] : [],
};

inquirer.prompt([studentQuestion, courseQuestion]).then((answers) => {
  console.log('Selected Student:', answers.student);
  console.log('Selected Course:', answers.course);
}); 

/* 
// import inquirer from "inquirer";

// Define a type for the student names
type Student = 'Alice' | 'Bob' | 'Charlie';

// Define a type for the courses mapping
type CoursesByStudent = {
  [key in Student]: string[];
};

const students: Student[] = ['Alice', 'Bob', 'Charlie'];

const coursesByStudent: CoursesByStudent = {
  Alice: ['Math', 'Science'],
  Bob: ['History', 'English'],
  Charlie: ['Physics', 'Chemistry'],
};

const studentQuestion = {
  type: 'list',
  name: 'student',
  message: 'Select a student:',
  choices: students,
};

const courseQuestion = {
  type: 'list',
  name: 'course',
  message: 'Select a course:',
  when: (answers: { student: Student | undefined }) => !!answers.student,
  choices: (answers: { student: Student | undefined }) =>
    answers.student ? coursesByStudent[answers.student] : [],
};

inquirer.prompt([studentQuestion, courseQuestion]).then((answers) => {
  console.log('Selected Student:', answers.student);
  // console.log('Selected Course:', answers.course);
});
 */













export{}