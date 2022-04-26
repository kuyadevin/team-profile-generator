const makeAllTeam = team => {

const makeManager = manager => {
    return `
    <div class="card" style="width: 18rem;">
     <div class="card-body">
         <h5 class="card-title">Manager</h5>
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
        <h5 class="card-title">Engineer</h5>
        <h6 class="name mb-2">${engineer.name}</h6>
        <p class="id">Employee ID Number: ${engineer.id}</p>
        <p class="email">E-Mail Address: ${engineer.email}</p>
        <p class="gitHub">GitHub Username: ${manager.officeNumber}</p>
    </div>
   </div>     
    `
}

const makeIntern = intern => {
    return `
    
    
    `
}


}

const array = [];



}

module.exports = team => {
    return `
    
    
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
${makeAllTeam(team)}
    
</body>
</html>
    
    
    `
}