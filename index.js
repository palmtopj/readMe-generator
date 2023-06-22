// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        message: "What is the title of your project?",
        name: "title",
        type: "input"
    },
    {
        message: "What is the description of your project?",
        name: "description",
        type: "input"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        const template = `# ${answers.title}
        
## Description
${answers.description}`

        fs.writeFile('TEST.md', template, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        })
    })
}

// Function call to initialize app
init();
