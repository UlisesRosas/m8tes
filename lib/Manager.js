const Employee = require('./Employee.js');

class Manager extends Employee {
    // lists all props inherited and new
    constructor(name, id, email, officeNumber){
        // lists inherited props
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;