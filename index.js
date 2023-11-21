// Including packages needed for this app
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generationMarkdown = require("./utils/generateMarkdown");
const generateMarkdown = require("./utils/generateMarkdown");


// Creating array of questions for user input
const questions = [
    {
        type: "input",
        name: "title", 
        message: "Name your project.", 
    },
    {
        type: "input",
        name: "description", 
        message: "Describe the function and purpose of the project.",
    },
    {
        type: "input",
        name: "screenshot", 
        message: "Provide a path to the image you want to use as a screenshot."
    },
    {
        type: "input",
        name: "link", 
        message: "Provide a URL where the unser can access the deployed app.", 
    },  
    {
        type: "checkbox",
        name: "license", 
        message: "Select a license applicable to this project.",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],   
    },  
    {
        type: "input",
        name: "require", 
        message: "List any project dependencies here.", 
    },  
    {
        type: "input",
        name: "features", 
        message: "List special features about the project here.", 
    },  
    {
        type: "input",
        name: "usage", 
        message: "State the languages or technologies associated with the project.", 
    },  
    {
        type: "input",
        name: "creator", 
        message: "Write Github user name", 
    },  
    {
        type: "input",
        name: "email", 
        message: "Provide a valid email address.", 
    },  
    {
        type: "input",
        name: "contributors", 
        message: "List any contributors. (github namers)",
        default : "",  
    }, 
     {
        type: "input",
        name: "test", 
        message: "Provide walkthrough of required test if applicable.", 
    },
 
];

// Writing README.md File 
function writeToFile(fileName, data) {
    return fs.writerFilesSync(path.join(process.cwd(), fileName),data);
}

// Initializing app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Professional README.md File...");
        writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
    });
}

init();
