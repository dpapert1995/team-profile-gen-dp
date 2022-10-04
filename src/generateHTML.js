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
        // Call manager function
        if (employee.getRole()  === 'Manager') {
            const cardManager = createManager(employee);
            pageArray.push(cardManager);
        }
        // Call engineer function
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
    // Joining strings 
    const teamCards = pageArray.join('')
    // Return to generated page
    const generateTeam = generateTeamPage(teamCards); 
    return generateTeam;
}