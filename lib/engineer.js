const Employee = require('./employee')

class Engineer extends Employee {
    constructor(answers) {
        super(answers);
        this.github = answers.github;
    }

    getGithub() {
        // fetch from github api
        return this.github
    }

    getRole() {
        return "Engineer"
    }

}

module.exports = Engineer