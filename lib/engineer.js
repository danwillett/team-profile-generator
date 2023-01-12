const Employee = require('./employee')

class Engineer extends Employee {
    constructor(answers) {
        super(answers);
        this.github = answers.github;
    }

    getGithubName() {
        return this.github;
    }

    getGithub = async () => {
        // fetch from github api
        const apiUrl = `https://api.github.com/users/${this.github}`
        const response = await fetch(apiUrl)
        const json = await response.json()
        const link = await json.html_url
        return link
          
    } 

    getRole() {
        return "Engineer"
    }

}
module.exports = Engineer