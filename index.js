const fs = require("fs");
// const axios = require("axios"); not needed 
const inquirer = require("inquirer");
// const generateMarkdown = require("./utils/generateMarkdown.js");



const questions = [
    //ask user for name of the app 
    {
      
        type: 'input',
        name: 'repoName',
        message: 'What is name of this application? (This will also be the main header of the README)',
     
    },
    //asks user for git hub user name 
    {
        type: 'input',
        name: 'gitHubName',
        message: 'What is your username on Github?',
     
    },
    // asks for a description of the project 
    {
        type: 'input',
        message: 'Write a description of this application',
        name: 'description',
     
    },
    // How do you install your app? 
    {
        type: 'input',
        message: 'How does a user install your application? Provide instuctions here',
        name: 'installApp',
     
    },
   // How does a user use your application? 
    {
        type: 'input',
        message: 'How does a user use your application? Provide instuctions here',
        name: 'appInstructions',
     
    },
    // How would a user of this application report an issue, or make a contribution to it? 
    {
        type: 'input',
        message: 'Would you like you users to be able to report issues or contribute to this project? add instructions here.',
        name: 'appIssuesAndCont',
     
    },
 // promts what license they would you  like to use? 
 // THIS SHOULD BE USED FOR A BADGE. 
    {
        type: 'input',
        message: 'What license they would you  like to use? (Ex: MIT) If you do not wish to use a license type "none" ',
        name: 'license',
     
    },
 //Asks the user who else contributed to their application 
    {
        type: 'input',
        message: 'Who else contributed to your application? if none write "none" ',
        name: 'contributors',
     
    },

];

function init() {
inquirer.prompt(questions).then((response)=>{


fs.writeToFile("README.md", ("# " + response.repoName )+ '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})
 
fs.writeToFile("README.md", ("This application was developed by: " + response.gitHubName + '\n') + '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})

fs.writeToFile("README.md", ( response.description ) + '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})

fs.writeToFile("README.md", ("## Installation" + '\n' + response.installApp )+ '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})

fs.writeToFile("README.md", ("## How to use the Application" + '\n' + response.appInstructions)+ '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})

fs.writeToFile("README.md", ("## Issue Reporting and Contributing" + '\n' + response.appIssuesAndCont)+ '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})

fs.writeToFile("README.md", ("## Other Contibuting Developers:" + '\n' + response.contributors)+ '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})

fs.writeToFile("README.md", ("## Licence(s)" + '\n' + response.license)+ '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})

})
}

//runs the function to creat the file 
init();
