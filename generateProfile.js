const makeAllTeam = team => {

    const makeManager = manager => {
            return `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${manager.getRole()}</h5>
                    <h6 class="name mb-2">${manager.name}</h6>
                    <p class="id">Employee ID Number: ${manager.id}</p>
                    <p class="email">E-Mail Address: ${manager.email}</p>
                    <p class="officeNumber">Office Number: ${manager.officeNumber}</p>
                </div>
            </div>   
        `
    }

    const makeEngineer = engineer => {
            return `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${engineer.getRole()}</h5>
                    <h6 class="name mb-2">${engineer.name}</h6>
                    <p class="id">Employee ID Number: ${engineer.id}</p>
                    <p class="email">E-Mail Address: ${engineer.email}</p>
                    <p class="gitHub">GitHub Username: ${engineer.getGithub()}</p>
                </div>
            </div>     
        `
    }

    const makeIntern = intern => {
            return `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${intern.getRole()}</h5>
                    <h6 class="name mb-2">${intern.name}</h6>
                    <p class="id">Employee ID Number: ${intern.id}</p>
                    <p class="email">E-Mail Address: ${intern.email}</p>
                    <p class="officeNumber">School: ${intern.getSchool()}</p>
                </div>
            </div>   
        `
    }

    const array = [];

    array.push(team
        .filter(employee => employee.getRole() = 'Manager')
        .map(manager => makeManager(manager))
    );

    array.push(team
        .filter(employee => employee.getRole() = 'Engineer')
        .map(engineer => makeEngineer(engineer))
        .join('')
    );

    array.push(team
        .filter(employee => employee.getRole() = 'Intern')
        .map(intern => makeIntern(intern))
        .join('')
    );

    return array.join('')


    module.exports = team => {
        return `
    
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
    </head>
    <body>
        <div class = "container-md text-center">
            <h1>Team Profile</h1>
        </div>
    ${makeAllTeam(team)}
    
    </body>
    </html>

    `
    }
}