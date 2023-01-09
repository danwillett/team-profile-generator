class Employee {
    constructor(answers) {
        this.name = answers.name;
        this.id = answers.id;
        this.email = answers.email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        // make a clickable link to open in default email program
        return this.email;
    }

    getRole() {
        return "Employee"
    }
}

module.exports = Employee