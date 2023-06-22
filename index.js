// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user input
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
    {
        message: "What are the installation instructions?",
        name: "installation",
        type: "input"
    },
    {
        message: "What are the contributions?",
        name: "contributions",
        type: "input"
    },
    {
        message: "What is left todo?",
        name: "todo",
        type: "input"
    },
    {
        message: "GitHub username?",
        name: "github",
        type: "input"
    },
    {
        message: "Email?",
        name: "email",
        type: "input"
    },
];

// Create a function to write README file
function writeToFile(fileName, data) {}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        const template = `# ${answers.title}
        
## Description
${answers.description}

## Installation
${answers.installation}

## Contributions
${answers.contributions}

## To Do
${answers.todo}

## GitHub
${answers.github}

## Email
${answers.email}`;

        fs.writeFile('TEST.md', template, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    });
}

// Function call to initialize app
init();
