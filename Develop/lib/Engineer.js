// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require ("./Employee.js")

// code that defines the Engineer class; `Employee` class extension
class Engineer extends Employee {
    constructor (name, id, email, githubUsername) {
    // super refers to the extended class 
    super(name, id, email)
    // additional information exclusive to the Engineer class
    this.githubUsername = githubUsername;
    }

    // code exports the Engineer class
    getGithubUsername() {
        return this.githubUsername
    }
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;