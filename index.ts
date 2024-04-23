#! /usr/bin/env node
import inquirer from "inquirer";

const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count a word:"
    }
]);

const words = answers.Sentence.trim().split(" "); // "Sentence" ko lowercase "sentence" mein badal diya gaya hai.

//print the array of words to the console
console.log(words);
 
// print the word count of the sentence
console.log(`Your sentence word count is ${words.length}`);