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
    message:'What is your project title?',
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
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const content = generateMarkdown(data)
    fs.writeFile(fileName,content, err=>{
        if(err){
            console.log(err)
            return
        }
        console.log('Sucess!')
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
