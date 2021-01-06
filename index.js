const fsPromises = require('fs').promises;
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
            name: 'url',
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
            name: 'purpose',
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

function generateFile (answer) {
    return `
    # ${answer.name}

    # Table of Contents

    - [description](#description)
    - [url](#url)
    - [purpose](#purpose)
    - [contributions](#contributions)
    - [license](#license)
    - [github](#github)
    - [email](#email)

    ## Description of Project
    ${answer.description}

    ## Live URL
    Visit the live application:
    ${answer.url}

    ## Purpose of the Project:
    ${answer.purpose}

    ## Contributers:
    ${answer.contributions}

    ## License:
    ${answer.license}

    ## Github Profile:
    To see the operations behind this project, vist my GitHub profile:
    ${answer.github}

    ## Email Address:
    For any questions about this project, email me at:
    ${answer.email}
    `
}

async function initalize () {
    try{
        const answer = await promptUser();

        const fileAnswers = generateFile(answer);

        fsPromises.writeFile("README.md", fileAnswers);
    }
    catch(err){
        console.log(err);
    }
}

initalize();