// Node modules
const inquirer = require('inquirer');
const fs = require('fs');

// Roles
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');

//Created HTML Page
const generateProfile = require('../src/generateProfile');

//Empty array representing new team
const team = [];

// manager question
const managerCard = () => {
    inquirer.prompt([
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
        },
        {
            type: 'list',
            message: 'What type of team memeber would you like to add next?',
            name: 'addTeammate',
            choices: ['Engineer','Intern', 'All done'],
        }
    ])
    .then((managerAnswers)=>{
        const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber)
        team.push(manager)
        switch(managerAnswers.addmember){
            case 'Engineer':
                engineerCard();
                break;
            case 'Intern':
                internCard();
                break;
            default:
                writeToFile('dist/index.html', generateProfile(team))
        }
    })
}

// Engineer questions
const engineerCard =  () => {
        inquirer.prompt([
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
    .then((managerAnswers)=>{
        const engineer = new Engineer (engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.gitHub)
        team.push(engineer)
        switch(engineerAnswers.addmember){
            case 'Engineer':
                engineerCard();
                break;
            case 'Intern':
                internCard();
                break;
            default:
                writeToFile('dist/index.html', generateProfile(team))
        }
    })
}
// Intern questions
const internCard =  () => {
        inquirer.prompt([
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
    .then((managerAnswers)=>{
        const intern = new intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school)
        team.push(intern)
        switch(internAnswers.addmember){
            case 'Engineer':
                engineerCard();
                break;
            case 'Intern':
                internCard();
                break;
            default:
                writeToFile('dist/index.html', generateProfile(team))
        }
    })
}
