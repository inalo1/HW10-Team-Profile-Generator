const Employee = require ("./Employee.js")

// code that defines the Manager class; `Employee` class extension
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
    // super refers to the extended class 
    super(name, id, email)
    // additional information exclusive to the Manager class
    this.officeNumber = officeNumber;
    }

    // code exports the Manager class
    getOfficeNumber() {
        return this.officeNumber
    }
    getRole() {
        return "Manager"
    }
}

module.exports = Manager;