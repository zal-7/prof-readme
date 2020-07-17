
const fs = require("fs");
const inquirer = require("inquirer");

// array of questions for user
const questions = [

        {   type: 'input',
            name: 'repoName',
            message: 'What is the name of this project?'

        },

        {   type: 'input'
            name: 'gitHubName'
            message: 'What is your Github username?'
        
        }
    
        {   type: 'input',
            message: 'Write a description of this application',
            name: 'description',
         
        },

        {   type: 'input',
            message: 'Write a table of contents for this application',
            name: 'description',
         
        },
        
        {   type: 'input',
            message: 'How do you install your application?',
            name: 'installApp',
         
        },
       
        {   type: 'input',
            message: 'How does a user use your application?',
            name: 'appInstructions',
         
        },
        
        {   type: 'input',
            message: 'What license they would you  like to use? (ex: MIT) Write "none" if you do not wish to use a license type ',
            name: 'license',
         
        },

        {   type: 'input',
            message: 'Who else contributed to your application? Write "none" if no one contributed ',
            name: 'contributors',
         
        },

        {   type: 'input',
            message: 'What questions do you have? Write "none" if no tests are needed ',
            name: 'tests',
         
        },

        {   type: 'input',
            message: 'What tests will you run? Write "none" if no questions ',
            name: 'questions',
         
        },
    

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
