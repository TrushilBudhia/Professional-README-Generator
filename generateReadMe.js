// Creating a function that generates the README file content
function generateReadMe(informationFromUserInput) {
    return `
        # ${informationFromUserInput.projectTitle.trim()}

        ## Description

        ${informationFromUserInput.description}

        ## Table of Contents
        - [Installation](#installation)
        - [Usage](#usage)
        - [License](#license)
        - [Contributing](#contributing)
        - [Tests](#test)
        - [Questions](#questions)

        ## Installation

        ${informationFromUserInput.installation}
        
        ## Usage

        ${informationFromUserInput.usage}
        
        ## License

        Copyright © ${informationFromUserInput.projectYear.trim()} ${informationFromUserInput.username.trim()}.

        Released under ${informationFromUserInput.license}. Refer to the LICENSE file for details.

        ## Contributing

        ${informationFromUserInput.contributing}

        ## Tests

        ${informationFromUserInput.tests}

        ## Questions

        For any questions, please contact the author through:
        
        Github: ${informationFromUserInput.githubProfile} 
        Email: ${informationFromUserInput.email}
    `
}

// Exporting the function
module.exports = {
    generateReadMe: generateReadMe
}