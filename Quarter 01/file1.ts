/* 
import inquirer from "inquirer";
import { prompt2 } from "./file2.js";

let prompt1 = [{
    type: "input",
    name: "name1",
    message: "Enter your name1"
},
{
    type: "input",
    name: "nameagain1",
    message: "Enter your nameagain1"
}
]
async function file1Function() {
    return inquirer.prompt(prompt1)
}
export let prompt1Answers = await inquirer.prompt(prompt1)
// inquirer.prompt([prompt2])
console.log(prompt1Answers.name1); */
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 0, "Lemon", "Kiwi"); 
// adds elements to an array at 2nd index
// deleted 0 elements
console.log("🚀 ~ file: file1.ts:23 ~ fruits:", fruits)