const inquirer = require('inquirer');
const fs = require("fs");
const questions = require("./questions.js");
const generate = require("./generateReadMe.js");

questions.promptInquirer()
    .then((response) => {
        const filename = "READMETEST.md";

        fs.writeFile(filename, generate.generateReadMe(response), (err) =>
            err ? console.error(err) : console.log("Success!")
        );
    })
