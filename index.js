// Page creation. Will work on later
const generateHTML = require('./src/generateHTML');

// Requires for classes
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js'); 

// Node Modules 
const inquirer = require('inquirer');
const fs = require('fs');

// Team Array (for data to be pushed to)
const teamArray = []; 

// Adding in prompts
// Requires at least one manager
const addManager = () => {
    return inquirer.prompt ([
        {
            // Manager.name
            name: 'name',
            type: 'input',
            message: 'Please enter the team managers name:', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter a name!");
                    return false; 
                }
            }
        },
        {
            // Manager.id
            name: 'id',
            type: 'input',
            message: "Please enter the team manager's ID:",
            validate: idInput => {
                if  (isNaN(idInput)) {
                    console.log ("Please enter an ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        // Manager.email
        {
            name: 'email',
            type: 'input',
            message: "Please enter the team manager's email:",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        // Manage.officeNumber
        {
            name: 'officeNumber',
            type: 'input',
            message: "Please enter the team manager's office number:",
            validate: officeInput => {
                if  (isNaN(officeInput)) {
                    console.log ('Please enter an office number!')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    // Creates new manager from inputs
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);
        teamArray.push(manager); 
        console.log(manager); 
    })
};
// Allows user to enter multiple employees of either type intern or engineer
const addEmployee = () => {
    return inquirer.prompt ([
        {
            // Employee type
            name: 'role',
            type: 'list',
            message: "Select an employee role:",
            choices: ['Engineer', 'Intern']
        },
        {
            // Employee.name
            name: 'name',
            type: 'input',
            message: "Please enter this employee's name:", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter a name!");
                    return false; 
                }
            }
        },
        {
            // Employee.id
            name: 'id',
            type: 'input',
            message: "Please enter the employee's ID:",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter an ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        // Employee.email
        {
            name: 'email',
            type: 'input',
            message: "Please enter the employee's email:",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        // ENGINEER ONLY: Engineer.github
        {
            name: 'github',
            type: 'input',
            message: "Please enter the engineer's github username:",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter a github username!")
                }
            }
        },
        // INTERN ONLY Intern.school
        {
            name: 'school',
            type: 'input',
            message: "Please enter the intern's school:",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the intern's school!")
                }
            }
        },
        // Prompts user to add employee
        {
            name: 'addConfirm',
            type: 'confirm',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
        // Constructs data for employees
        let { name, id, email, role, github, school, addConfirm } = employeeData; 
        let employee; 
        // Determines structure based on employee role
        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            console.log(employee);
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
            console.log(employee);        
        }
        teamArray.push(employee); 
        if (addConfirm) {
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })

};

// Generates HTML with team cards
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Checkout index.html for your team profile!")
        }
    })
}; 

// Call functions for program flow
addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });