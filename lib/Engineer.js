// ENGINEER CONSTRUCTOR
// Imports the Employee constructor, since the Engineer constructor shares it's base properties.
const Employee = require("./Employee");
// Calls new class Engineer to extend upon Employee class.
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // Takes name, id, and email from Employee constructor.
        super (name, id, email);
        // Adds parameter "github" to Engineer constructor.
        this.github = github; 
    }
    // Returns Github.
    getGithub () {
        return this.github;
    }

     // Override Employee getRole() method to return "Engineer" instead.
    getRole () {
        return "Engineer";
    }
}
// Exported
module.exports = Engineer; 