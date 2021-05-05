const licenseBadge = require('./createLicenseBadge.js');

// Creating a function that generates the README file content
function generateMarkdown(informationFromUserInput) {
    return `
# ${informationFromUserInput.projectTitle.trim()}

${licenseBadge.createLicenseBadge(informationFromUserInput.license)}

## Description

${informationFromUserInput.description}

## 📖Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation

${informationFromUserInput.installation}

## Usage

${informationFromUserInput.usage}

## License

Copyright © ${informationFromUserInput.projectYear.trim()} [${informationFromUserInput.username.trim()}.]((https://github.com/${informationFromUserInput.githubProfile}))\n
Released under ${informationFromUserInput.license}. Refer to the [LICENSE](./LICENSE) file for details.

## Contributing

${informationFromUserInput.contributing}

## Tests

${informationFromUserInput.tests}

## Questions

For any questions, please contact the author:

Github: [${informationFromUserInput.githubProfile}](https://github.com/${informationFromUserInput.githubProfile})\n 
Email: ${informationFromUserInput.email}
    `
}

// Exporting the function
module.exports = {
    generateMarkdown
}