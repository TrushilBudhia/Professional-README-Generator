// Importing fs, questions and generateReadMe
const fs = require("fs");
const questions = require("./utils/questions.js");
const markdown = require("./utils/generateMarkdown.js");

// Invoking the promptInquirer function in questions
questions.promptInquirer()
    .then((response) => {
        const filename = "READMETEST.md";
        // Writing the information received to the a READMETEST.md file
        fs.writeFile(filename, markdown.generateMarkdown(response), (err) =>
            err ? console.error(err) : console.log(`${filename} created successfully!`)
        );
    })
    .catch(error => {
        console.error(`Inquirer has failed: ${error}`);
    })
