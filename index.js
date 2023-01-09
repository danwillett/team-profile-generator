const inquirer = require('inquirer')
const makeProfile = require('makeProfile')

// first inquirer asks about manager information
inquirer
    .prompt([
        {
            type: 'input',
            message: "Please enter your team manager's name",
            name: 'managerName'
        },

        {
            type: 'input',
            message: "Please enter your team manager's employee ID",
            name: 'managerID'
        },

        {
            type: 'input',
            message: "Please enter your team manager's email address",
            name: 'managerEmail'
        },

        {
            type: 'input',
            message: "Please enter your team manager's office number",
            name: 'managerOffice'
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
            name: 'internName'
        },

        {
            type: 'input',
            message: "Please enter your intern's employee ID",
            name: 'internID'
        },

        {
            type: 'input',
            message: "Please enter your intern's email address",
            name: 'internEmail'
        },

        {
            type: 'input',
            message: "Please enter your intern'school",
            name: 'internSchool'
        },

    ).then(
        nextEmployee()
    )
}

const askEngineer = () => {
    inquirer
    .prompt(
        {
            type: 'input',
            message: "Please enter your engineer's name",
            name: 'engineerName'
        },

        {
            type: 'input',
            message: "Please enter your engineer's employee ID",
            name: 'engineerID'
        },

        {
            type: 'input',
            message: "Please enter your engineer's email address",
            name: 'engineerEmail'
        },

        {
            type: 'input',
            message: "Please enter your engineer's Github username",
            name: 'engineerGithub'
        },
    ).then(
        nextEmployee()
    )
}