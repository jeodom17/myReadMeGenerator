const inquirer = require('inquirer');
const fs = require('fs');
const util  =require('util');
const writeFileAsync = util.promisify(writeToFile);
const generateReadMe = require('./generateReadMe');
// -- Array of questions for user input --
const questions = [
    {
        type: 'input',
        name: 'userName',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
        validate: (input) => {
            if (!input.includes('@')) {
                return 'Enter a valid email address to continue.';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is your Project Title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short description of your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license should your project have?',
        choices: ['APACHE 2.0', 'BSD 3', 'GPL 3.0', 'MIT', 'none']
    },
    {
        type: 'input',
        name: 'installCommand',
        message: 'What command should be run to install dependencies?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'testCommand',
        message: 'What command should be run for testing?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?'
    },
    {
        type: 'input',
        name: 'Credits',
        message: 'Who deserves to be credited for this project?'
    },
    
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to this repo?'
    },
  
];
///==========================================================================
// -- Function to write README file --
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>{
    err ? console.error(err) : console.log("\x1b[32mREADME Complete!!!");
    });
}

// --- Function to initialize app ---
function init() {
    inquirer
        .prompt(questions)
        .then((answers) =>{
            console.log("Generating README...")
            writeToFile('./README.md', generateReadMe(answers));
        });
}

// -- Function call to initialize app --
init();