const inquirer = require('inquirer');

// Function to validate user input is not an empty string
const answerValidator = async (input) => {
    return (input === '' ? 'Invalid value' : true);
}

// Function prompting user to answer questions for creating the README.md file
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
            type: 'editor',
            message: 'Please provide a description for the project:',
            name: 'description',
            validate: answerValidator,
        },
        {
            type: 'editor',
            message: 'Please provide installation instructions:',
            name: 'installation',
            validate: answerValidator,
        },
        {
            type: 'editor',
            message: 'Please provide usage information:',
            name: 'usage',
            validate: answerValidator,
        },
        {
            type: 'list',
            message: 'Please select a license for the project:',
            name: 'license',
            choices: [
                'Academic Free License v3.0',
                'Apache license 2.0	',
                'Artistic license 2.0',
                'Boost Software License 1.0',
                'BSD 2-clause "Simplified" license',
                'BSD 3-clause "New" or "Revised" license',
                'BSD 3-clause Clear license',
                'Creative Commons license family',
                'Creative Commons Zero v1.0 Universal',
                'Creative Commons Attribution 4.0',
                'Creative Commons Attribution Share Alike 4.0',
                'Do What The F*ck You Want To Public License',
                'Educational Community License v2.0',
                'Eclipse Public License 1.0',
                'Eclipse Public License 2.0',
                'European Union Public License 1.1',
                'GNU Affero General Public License v3.0',
                'GNU General Public License family',
                'GNU General Public License v2.0',
                'GNU General Public License v3.0',
                'GNU Lesser General Public License family',
                'GNU Lesser General Public License v2.1',
                'GNU Lesser General Public License v3.0',
                'ISC',
                'LaTeX Project Public License v1.3c',
                'Microsoft Public License',
                'MIT',
                'Mozilla Public License 2.0',
                'Open Software License 3.0',
                'PostgreSQL License',
                'SIL Open Font License 1.1',
                'University of Illinois/NCSA Open Source License',
                'The Unlicense',
                'zLib License'
            ]
        },
        {
            type: 'input',
            message: 'What year is the project being released in?',
            name: 'projectYear',
            validate: answerValidator,
        },
        {
            type: 'input',
            message: 'Please provide information surrounding contributions:',
            name: 'contributing',
            validate: answerValidator,
        },
        {
            type: 'input',
            message: 'Please provide testing information:',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'Please provide an email address further questions can be directed to:',
            name: 'email',
            validate: answerValidator,
        },
    ])
}

module.exports = {
    promptInquirer
}