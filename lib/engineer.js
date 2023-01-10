const Employee = require('./employee')

class Engineer extends Employee {
    constructor(answers) {
        super(answers);
        this.github = answers.github;
    }

    

    getGithub = async () => {
        // fetch from github api
        const apiUrl = `https://api.github.com/users/${this.github}`
        const response = await fetch(apiUrl)
        const json = await response.json()
        const link = await json.html_url
        console.log(link)
        return link
          
    }

    getRole() {
        return "Engineer"
    }

}

async function foo() {
    let obj;
  
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  
    obj = await res.json();
  
    console.log(obj)
  }

module.exports = Engineer