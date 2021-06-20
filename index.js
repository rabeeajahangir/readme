// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');






// // TODO: Create an array of questions for user input
// const questions = [];

const promptUse = () => {
  return inquirer.prompt([{
          name: 'git_username',
          type: 'input',
          message: 'Enter your GitHub username: [Required]',
          validate: gitHubNameInput => {
              if (gitHubNameInput) {
                  return true
              } else {
                  console.log('Enter your GitHub username!')
                  return false
              }
          }
      }, {
          name: 'git_url',
          type: 'input',
          message: 'Enter your GitHub project URL: [Required]',
          validate: projectURLInput => {
              if (projectURLInput) {
                  return true
              } else {
                  console.log('Enter your project URL!')
                  return false
              }
          }
      }, {
          name: 'email',
          type: 'input',
          message: 'Enter your email address: [Required]',
          validate: emailInput => {
              if (emailInput) {
                  return true
              } else {
                  console.log('Enter your email address!')
                  return false
              }
          }
      }, {
          name: 'project_title',
          type: 'input',
          message: 'What is the title of your project? [Required]',
          validate: TitleInput => {
              if (TitleInput) {
                  return true
              } else {
                  console.log('Enter your project title!')
                  return false
              }
          }
      }, {
          name: 'description',
          type: 'input',
          message: 'Enter a description: [Required]',
          validate: descriptionInput => {
              if (descriptionInput) {
                  return true
              } else {
                  console.log("Enter your project's description!")
                  return false
              }
          }
      }, {
          name: 'installConfirm',
          type: 'confirm',
          default: false,
          message: 'Do you want to include installation instructions?',
      }, {
          name: 'install',
          type: 'input',
          message: 'Enter installation instructions:',
          when: ({
              installConfirm
          }) => {
              if (installConfirm) {
                  return true
              } else {
                  return false
              }
          }
      },{
          name: 'usageConfirm',
          type: 'confirm',
          message: 'Do you want to include usage information?',
      },{
          name: 'usage',
          type: 'input',
          message: 'Enter usage information:',
          when: ({
              usageConfirm
          }) => {
              if (usageConfirm) {
                  return true
              } else {
                  return false
              }
          }
      },{
          name: 'testConfirm',
          type: 'confirm',
          message: 'Are there testing instructions?'
      },{
          name: 'test',
          type: 'input',
          message: 'Enter testing instructions:',
          when: ({
              testConfirm
          }) => {
              if (testConfirm) {
                  return true
              } else {
                  return false
              }
          }
      },{
          name: 'licensing',
          type: 'list',
          message: 'Select a license for this project, if no license select "None". [Required]',
          choices: ['MIT','Apache','Boost','ISC','None'],
          validate: licenseInput => {
              if(licenseInput) {
                  return true
              } else {
                  console.log('Please choose an option!')
                  return false
              }
          }
      },{
          name: 'contributions',
          type: 'input',
          message: 'Who made contributions?'
      }
  ])
};

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
