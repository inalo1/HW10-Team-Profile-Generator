// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require ("./Employee.js")

// code that defines the Engineer class; `Employee` class extension
class Engineer extends Employee {
    constructor (name, id, email, github) {
    // super refers to the extended class 
    super(name, id, email)
    // additional information exclusive to the Engineer class
    this.github = github;
    }

    // code exports the Engineer class
    getGithub() {
        return this.github
    }
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;