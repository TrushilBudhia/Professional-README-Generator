const inquirer = require('inquirer');

function promptInquirer() {
    return inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'githubProfile',
        },
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'projectTitle',
        },
        {
            type: 'input',
            message: 'Please provide a description for the project:',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Please provide installation instructions:',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Please provide usage information:',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'What year is the project being released in?',
            name: 'projectYear',
        },
        {
            type: 'input',
            message: 'Please select a license for the project:',
            name: 'license',
        },
        {
            type: 'input',
            message: 'Please provide information surrounding contributions',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'Please provide testing information:',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'Please provide an email address further questions for this project be directed to:',
            name: 'email',
        },
    ])
}

module.exports = {
    promptInquirer
}