const inquirer = require("inquirer");

const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");



const fs = require("fs");

function runInquirer() {
    const promptArray = [{
        type: "input",
        message: "Please enter your name.",
        name: "name"

    }, {
        type: "input",
        message: "Please enter your employee ID.",
        name: "id"

    }, {
        type: "input",
        message: "Please enter your email address.",
        name: "email"

    }, {
        type: "list",

        message: "Please enter your title.",
        choices: ["Manager", "Engineer", "Intern"],
        name: "title"
    }];

    return inquirer
        .prompt(promptArray);
}

function runManagerInquirer() {
    const promptArray = [{
        type: "input",
        message: "What is your office number?",
        name: "officeNumber"
    }];

    return inquirer
        .prompt(promptArray);
}

function runEngineerInquirer() {
    const promptArray = [{
        type: "input",
        message: "What is your github?",
        name: "github"
    }];

    return inquirer
        .prompt(promptArray);
}

function runInternInquirer() {
    const promptArray = [{
        type: "input",
        message: "What school do you attend?",
        name: "school"
    }];

    return inquirer
        .prompt(promptArray);
}

async function run() {
    let employeeArray = [];
    const maxTimes = 4;
    for (i = 0; i < maxTimes; i++) {
        const promise = new Promise((resolve, reject) => {
            runInquirer()
                .then(function ({ name, id, email, title }) {

                    if (title === "Manager") {
                        runManagerInquirer().then(function ({ officeNumber }) {
                            this.employee = new Manager(name, id, email, officeNumber, title);
                            console.log(officeNumber);
                            employeeArray.push(employee);
                            resolve("done");
                        });
                    } else if (title === "Engineer") {
                        runEngineerInquirer().then(function ({ github }) {
                            this.employee = new Engineer(name, id, email, github, title);
                            console.log(github);
                            employeeArray.push(employee);
                            resolve("done");
                        });
                    } else if (title === "Intern") {
                        runInternInquirer().then(function ({ school }) {
                            this.employee = new Intern(name, id, email, school, title);
                            console.log(school);
                            employeeArray.push(employee);
                            resolve("done");
                        });
                    }

                }).catch(function (err) {
                    console.log("Sorry, there is an error.");
                    console.log(err);
                });
        });


        const result = await promise;
        console.log(result);
    }

    function displayTitle(employee) {
        if (employee.title === "Manager") {
            console.log(employee.officeNumber);
            return `office number: ${employee.officeNumber}`;
        }

        if (employee.title === "Intern") {
            return `school: ${employee.school}`;
        }

        if (employee.title === "Engineer") {
            return `gitHub: ${employee.github}`;
        }

    }
    function getCardHtml() {
        let html = "";
        for (j = 0; j < maxTimes; j++) {
            console.log(employeeArray[j])
            html += `<div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
                <div class="col card-header">
                    <h4>${employeeArray[j].name}</h4>
                </div>
                <div class="col card-header">
                    <h4>${employeeArray[j].title}</h4 >
                </div >
                <ul class="list-group list-group-flush text">
                    <li class="list-group-item">ID: ${employeeArray[j].id}</li>
                    <li class="list-group-item">Email: ${employeeArray[j].email}</li>
                    <li class="list-group-item"> ${displayTitle(employeeArray[j])}</li>
                </ul>
            </div > `;
        }
        return html;
    }

    let html = `< !DOCTYPE html >
<html lang="en">
    <head>
        <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta http-equiv="X-UA-Compatible" content="ie=edge">
             <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
             integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
          <title>Employee Info</title>

          <style>
          .row {
              display: flex;
flex-wrap: wrap;
justify-content: center;
margin-top: 15px;
margin-bottom: 15px;
}

.card {
    padding: 10px;
border-radius: 5px;
background-color: white;
color: blue;
margin: 15px;
}
.text {
    padding: 10px;
border-radius: 5px;
background-color: blue;
color: black;
margin: 15px;
}
.col {

