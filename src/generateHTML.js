// Creates Manager card
const createManager = function (manager) {
    return `
    <div class="col-8">
        <div class="card">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i class="material-icons">content_paste</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}
// Create Engineer card
const createEngineer = function (engineer) {
    return `
    <div class="col-8">
        <div class="card">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
}
// Create Intern card 
const createIntern = function (intern) {
    return `
    <div class="col-8">
        <div class="card">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i class="material-icons">assignment_ind</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `
};
// Pushes array 
generateHTML = (data) => {
    // Array for cards 
    pageArray = []; 
    for (let i = 0; i < data.length; i++) {
        // Uses employee class structure to cover all options
        const employee = data[i];
        // Calls manager function
        if (employee.getRole()  === 'Manager') {
            const cardManager = createManager(employee);
            pageArray.push(cardManager);
        }
        // Calls engineer function
        if (employee.getRole()  === 'Engineer') {
            const cardEngineer = createEngineer(employee);
            pageArray.push(cardEngineer);
        }
        // Calls Generate Intern Function
        if (employee.getRole()  === 'Intern') {
            const cardIntern = createIntern(employee);
            pageArray.push(cardIntern);
        }  
    }
    // Joins string of cards to new string
    const teamCards = pageArray.join('')
    // Return to generated page
    const generateTeam = generateTeamPage(teamCards); 
    return generateTeam;
}

// Generates
const generateTeamPage = function (teamCards) {   
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"crossorigin="anonymous"
        <link rel="stylesheet href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand" id="navbar-text">Team Profile</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    <!--Team Cards-->
                    ${teamCards}
                </div>
            </div>
        </main>
    </body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    </html>
  `;
  }
  
  // Export to index
  module.exports = generateHTML; 