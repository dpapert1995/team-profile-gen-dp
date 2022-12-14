// Creates Manager card
const createManager = function (manager) {
    return `
    <div class="col-8">
        <div class="card">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
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
                <h4>Engineer</h4>
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
                <h4>Intern</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto: ${intern.email}">${intern.email}</a></p>
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
        // Calls generate manager function
        if (employee.getRole()  === 'Manager') {
            const cardManager = createManager(employee);
            pageArray.push(cardManager);
        }
        // Calls generate engineer function
        if (employee.getRole()  === 'Engineer') {
            const cardEngineer = createEngineer(employee);
            pageArray.push(cardEngineer);
        }
        // Calls generate Intern Function
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

// Generates full HTML content
const generateTeamPage = function (teamCards) {   
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
                <span class="header-text" id="header">Team Profile</span>
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
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"</script>
    </html>
  `;
  }
  
  // Export to index
  module.exports = generateHTML; 