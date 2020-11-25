// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require ("./Employee.js")

// code that defines the Intern class; `Employee` class extension
class Intern extends Employee {
    constructor (name, id, email, school) {
    // super refers to the extended class 
    super(name, id, email)
    // additional information exclusive to the Intern class
    this.school = school;
    }

    // code exports the Intern class
    getSchool() {
        return this.school
    }
    getRole() {
        return "Intern"
    }
}

module.exports = Intern;