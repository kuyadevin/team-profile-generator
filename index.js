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

// Engineer questions
const engineerCard = inquirer.prompt([
    {
        type: 'input',
        message: "What is the engineer's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is the engineer's employee ID?",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is the engineer's e-mail address?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is the engineer's GitHub username?",
        name: 'github', 
    }
])

// Intern questions
const internCard = inquirer.prompt([
    {
        type: 'input',
        message: "What is your intern's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is the intern's employee ID?",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is the intern's e-mail address?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What school does the intern attend?",
        name: 'school', 
    }
])

