// TODO: Include packages needed for this application
// 'fs' and 'inquirer' packages used for application
const fs = require("fs")
const inquirer = require('inquirer');

//generateMarkdown.js stored in variable
const generateMarkdown = require('./utils/generateMarkdown')

// variable storing function to validate user input
const valInput = (userInput) => userInput ? true : (console.log("You must input a value to continue"), false);

// TODO: Create an array of questions for user input
// Questions about user for README file
const questions = [
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
        validate: valInput,
      },
      {
        type: 'input',
        message: 'What is the TITLE of your Project?',
        name: 'title',
        validate: valInput,
      },
      {
        type: 'input',
        message: 'Please enter a DESCRIPTION of your project:',
        name: 'description',
        validate: valInput,
      },
    
      {
        type: 'input',
        message: 'What do you need to INSTALL for this project?',
        name: 'installation',
        validate: valInput,
    },
    {
        type: 'input',
        message: 'What is the USAGE for this project?',
        name: 'usage',
        validate: valInput,
    },
    {
        type: 'input',
        message: 'What CREDITS would you list for this project?',
        name: 'credits',
        validate: valInput,
    },

    {
        type: 'input',
        name: 'test',
        message: 'What steps must be made to test you application?',
        validate: valInput,
    },
    
    { 
      type: 'list',
      message: 'Please, choose one LICENSE for this project',
      name: 'license',
      choices: ['BOOST', 'Apache', 'MIT', 'None'],
      validate: valInput,
    },
];

// TODO: Create a function to write README file
// writeToFile function for writing README
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.error(err) : console.log('SUCCESS! You made your README!')
    // log tells user README file made successfully
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile('newREADME.md', generateMarkdown(data));
            // call writeToFile function with doc name and generateMarkdown(data) arguments
            
            console.log(data);
        });
        
}

// Function call to initialize app
init();



// // GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// // THEN I am taken to the corresponding section of the README