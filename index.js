// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');
const writeFileAsync = util.promisify(fs.writeFile);





// // TODO: Create an array of questions for user input
// const questions = [];

const questions = [
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project title is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Write a description of your project.",
        name: 'description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project description is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'What steps are required to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples of your project in use for the Usage section.',
        name: 'usage',
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT'],
        name: 'license',
    },
    {
        type: 'input',
        message: "If applicable, provide guidelines on how other developers can contribute to your project.",
        name: 'contributing',
    },
    {
        type: 'input',
        message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
        name: 'tests',
    },
    {
        type: 'input',
        message: "What is your GitHub username? (no @ required.)",
        name: 'userName',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub username is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the name of your GitHub repo?",
        name: 'repo',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub repo is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Please enter your email address.',
        name: 'email',
    }
];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
promptUser()
  .then(promptProject)
  .then(portfolioData => {
    return generatePage(portfolioData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });
// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
