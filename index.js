const inquirer = require('inquirer')
const makeProfile = require('makeProfile')

// first inquirer asks about manager information
inquirer
    .prompt([
        {
            type: 'input',
            message: "Please enter your team manager's name",
            name: 'name'
        },

        {
            type: 'input',
            message: "Please enter your team manager's employee ID",
            name: 'id'
        },

        {
            type: 'input',
            message: "Please enter your team manager's email address",
            name: 'email'
        },

        {
            type: 'input',
            message: "Please enter your team manager's office number",
            name: 'office'
        },

    ])
    .then(answers => {
        makeProfile(answers, 'manager')
        nextEmployee()
        
    })


const nextEmployee = () => {
    inquirer
    .prompt([
        {
        type: 'rawlist',
        message: "Would you like to add another employee?",
        choices: ['intern', 'engineer', 'no more employees']   
        }
    ]).then(
        promptNextEmployee(answers)
    )
}

const promptNextEmployee = answers => {
        
    if (answers.choices === 'intern') {
        askIntern()
    } else if (answers.choices === 'engineer') {
        askEngineer()
    } else {
        finishHtml()
    }
    }
    
const askIntern = () => {

    inquirer
    .prompt(
        {
            type: 'input',
            message: "Please enter your intern's name",
            name: 'name'
        },

        {
            type: 'input',
            message: "Please enter your intern's employee ID",
            name: 'id'
        },

        {
            type: 'input',
            message: "Please enter your intern's email address",
            name: 'email'
        },

        {
            type: 'input',
            message: "Please enter your intern'school",
            name: 'school'
        },

    ).then(answers => {
        makeProfile(answers, "intern")
        nextEmployee()
    }     
    )
}

const askEngineer = () => {
    inquirer
    .prompt(
        {
            type: 'input',
            message: "Please enter your engineer's name",
            name: 'name'
        },

        {
            type: 'input',
            message: "Please enter your engineer's employee ID",
            name: 'id'
        },

        {
            type: 'input',
            message: "Please enter your engineer's email address",
            name: 'email'
        },

        {
            type: 'input',
            message: "Please enter your engineer's Github username",
            name: 'github'
        },
    ).then(answers => {
        makeProfile(answers, "engineer")
        nextEmployee()
    }     
    )
}