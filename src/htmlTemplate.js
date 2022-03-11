//   take the array and buld TEMPLATE

function createCards (team) {
    const html = [];
    for (const teamMember of team){
        // getrole comes from object method
        switch(teamMember.getRole()) {
            case 'Manager':
                html.push(generateManagerCard(teamMember))
            case 'Engineer':
                html.push(generateEngineerCard(teamMember))
            case 'Intern':
                html.push(generateInternCard(teamMember))
        }
    }
    // ,join converts arr in to string
    return html.join('');
}

function generateManagerCard(manager) {
    return `
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
</div>
    `
}


module.exports = team => { return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    ${createCards(team)}
</body>
</html>
`};