// INTERN CONSTRUCTOR
// Imports the Employee constructor, since the Intern constructor shares it's base properties.
const Employee = require('./Employee');
// Calls new class Intern to extend upon Employee class.
class Intern extends Employee  {
    constructor (name, id, email, school) {
        // Takes name, id, and email from Employee constructor.
        super (name, id, email); 
        // Adds parameter "school" to Intern constructor.
        this.school = school; 
    }
    // Returns School.
    getSchool () {
        return this.school;
    }
    // Override Employee getRole() method to return "Intern" instead.
    getRole () {
        return "Intern";
    }
};
// Exported.
module.exports = Intern; 