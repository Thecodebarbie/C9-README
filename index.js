// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');


const fs=require('fs');
const inquire = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [{
    type:'input',
    message:'What is your project title?',
    name:'title'
}, {
    type:'list',
    message:'What license would you like to choose?',
    name:'license',
    choices:['MIT', 'Apache', 'IBM', 'No License']
}, {
    type:'input',
    message:'Provide a brief description of your project:',
    name:'description',
    validate: function(input){
        if (input.length > 0) {
            return true;
        }else {
            return 'Please enter a description for your project.';
        }
    }
}, {
    type: 'input',
    message: 'Provide installation instructions:',
    name: 'installation',
    validate: function(input) {
        if (input.length > 0) {
            return true;
        } else {
            return 'Please provide installation instructions for your project.';
        }
    }
}, {
    type: 'input',
    message: 'Provide usage instructions:',
    name: 'usage',
    validate: function(input) {
        if (input.length > 0) {
            return true;
        } else {
            return 'Please provide usage instructions for your project.';
        }
    }
},{
    type: 'input',
    message: 'Provide guidelines for contributing:',
    name: 'contributing',
    validate: function(input) {
        if (input.trim()) {
            return true;
        } else {
            return 'Please provide guidelines for contributing.';
        }
    }
},{
    type: 'input',
    message: 'Provide instructions for running tests:',
    name: 'tests',
    validate: function(input) {
        if (input.trim()) {
            return true;
        } else {
            return 'Please provide instructions for running tests.';
        }
    }
}


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const content = generateMarkdown(data)
    fs.writeFile(fileName,content, err=>{
        if(err){
            console.log(err)
            return
        }
        console.log('Success!')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquire.prompt(questions)
    .then(data=>{
        writeToFile('./output/README.md',data)
    })
}

// Function call to initialize app
init();
