// TODO: Include packages needed for this application
const generateMarkdown = require('.utils/generateMarkdown')

const inquire = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [{
    type:'input',
    message:'What is your project title?',
    name:'title'
}, {
    type:'list',
    message:'What is your project title?',
    name:'license'
    choices:['MIT', 'Apache', 'IBM', 'No License']
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
