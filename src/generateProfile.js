const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer.js');
const Intern = require('../lib/intern.js');

const makeAllTeam = team => {

    const makeManager = manager => {
            return `
            <div class = "col-3">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${manager.getRole()}</h5>
                        <h6 class="name mb-2">${manager.name}</h6>
                        <p class="id">Employee ID Number: ${manager.id}</p>
                        <p class="email">E-Mail Address: ${manager.email}</p>
                        <p class="officeNumber">Office Number: ${manager.officeNumber}</p>
                    </div>
                </div>
            </div> 
        `
    }

    const makeEngineer = engineer => {
            return `
            <div class = "col-3">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${engineer.getRole()}</h5>
                        <h6 class="name mb-2">${engineer.name}</h6>
                        <p class="id">Employee ID Number: ${engineer.id}</p>
                        <p class="email">E-Mail Address: ${engineer.email}</p>
                        <p class="gitHub">GitHub Username: github.com/${engineer.getGithub()}</p>
                    </div>
                </div>
            </div>
        `
    }

    const makeIntern = intern => {
            return `
            <div class = "col-3">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${intern.getRole()}</h5>
                        <h6 class="name mb-2">${intern.name}</h6>
                        <p class="id">Employee ID Number: ${intern.id}</p>
                        <p class="email">E-Mail Address:>${intern.email}</p>
                        <p class="school">School: ${intern.getSchool()}</p>
                    </div>
                </div>
            </div>   
        `
    }

    const array = [];

    array.push(team
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => makeManager(manager))
    );

    array.push(team
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => makeEngineer(engineer))
        .join('')
    );

    array.push(team
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => makeIntern(intern))
        .join('')
    );

    return array.join('')
}

function makeTeam(team){
        return `
    
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title class = ".bg-info">Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="./assets.style.css">
    </head>
    <body>
        <div class = "container-md text-center">
            <h1>Team Profile</h1>
        </div>
        <div class= "container">
            <div class= "justify-content">
                <div class= "row">
            ${makeAllTeam(team)}
                </div>
            </div> 
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>   
    </body>
    </html>

    `
    }
module.exports = makeTeam;