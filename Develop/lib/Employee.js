// code that defines the Employee class
class Employee {
    constructor (name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
    }

    // code exports the Employee class
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.Email
    }
    getRole() {
        return "Employee"
    }

}

module.exports = Employee;