// EMPLOYEE CONSTRUCTOR
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }
    // Returns employee name.
    getName () {
        return this.name;
    }
    // Returns Employee ID.
    getId () {
        return this.id;
    }   
    // Returns email.
    getEmail () {
        return this.email;
    }
    // Returns employee type.
    getRole () {
        return 'Employee'; 
    }
};
// Exported
module.exports = Employee; 