const Employee = require('./employee')

class Engineer extends Employee {
    constructor(answers) {
        super(answers);
        this.github = answers.github;
    }

    getGithub() {
        // fetch from github api
        const apiUrl = `https://api.github.com/users/${this.github}`
        let githubLink;
        fetch(apiUrl)
        .then(raw => {return raw.json()})
        .then(results => {
            console.log(results)
            githubLink = results.url;
        })
        console.log(githubLink)
        return githubLink;
        
    }

    getRole() {
        return "Engineer"
    }

}

module.exports = Engineer