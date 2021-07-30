const inquirer = require("inquirer");

const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");



const fs = require("fs");

function runInquirer() {
    const promptArray = [{
        type: "input",
        message: "What is your name?",
           name: "name"

    }, {
        type: "input",
         message: "What is your ID?",
        name: "id"

    }, {
        type: "input",
        message: "What is your email?",
        name: "email"

    }, {
        type: "list",

           message: "What is your title",
        choices: ["Manager", "Engineer", "Intern"],
        name: "title"
    }];


}
