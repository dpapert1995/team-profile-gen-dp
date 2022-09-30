// MANAGER CONSTRUCTOR
// Imports the Employee constructor, since the Manager constructor shares it's base properties.
const Employee = require('./Employee');
// Calls new class Manager to extend upon Employee class.
class Manager extends Employee  {
    constructor (name, id, email, officeNumber) {
        // Takes name, id, and email from Employee constructor.
        super (name, id, email); 
        // Adds parameter "officeNumber" to Manager constructor.
        this.officeNumber = officeNumber; 
    }
    // Returns Office Number.
    officeNumber () {
        return this.officeNumber;
    }
    // Override Employee getRole() method to return "Manager" instead.
    getRole () {
        return "Manager";
    }
};
// Exported.
module.exports = Manager; 