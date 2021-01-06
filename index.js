const fs = require('fs');
const inquirer = require('inquirer');

function promptUser () {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'name',
          },
          {
            type: 'input',
            message: 'Enter a description of your project...',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("You must enter a description for your project.");
                }
                return true;
            },
            name: 'description'
          },
          {
            type: 'input',
            message: 'Provide a URL for your project',
            name: 'method',
          },
          {
            type: 'input',
            message: 'For what purpose is your project intended for?',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("You must enter a description for your project.");
                }
                return true;
            },
            name: 'method',
          },
          {
            type: 'input',
            message: 'Who contributed to this project?',
            name: 'contributions',
          },
          {
            type: 'checkbox',
            message: 'Select a license',
            choices: ['Apache', 'MIT', 'ISU', 'GNU'],
            name: 'license',
          },
          {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github',
          },
          {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
          },
    ])
}

function generateFile (answers) {
    return `
    `
}