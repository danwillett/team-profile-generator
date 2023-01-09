const Employee = require('./employee')

class Manager extends Employee {
    constructor(answers) {
        super(answers);
        this.officeNumber = answers.office;
    }

    getRole() {
        return "Manager"
    }
}

module.exports = Manager