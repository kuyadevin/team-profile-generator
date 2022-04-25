// Node modules
const inquirer = require('inquirer');
const fs = require('fs');

// Roles
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

//Empty array representing new team
const team = [];

// manager question
const managerCard = inquirer.prompt([
    {
        type: 'input',
        message: "What is your team manager's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is the manager's employee ID?",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is the manager's e-mail address?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is the manager's office number?",
        name: 'officeNumber', 
    }
])

