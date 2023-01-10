const inquirer = require('inquirer')
const fs = require("fs");

const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")

// 
// IQUIRER Prompts
//

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

// gives an inquirer prompt asking what the next employee type is
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

// given a certain employee type, asks questions
const promptNextEmployee = answers => {
        
    if (answers.choices === 'intern') {
        askIntern()
    } else if (answers.choices === 'engineer') {
        askEngineer()
    } else {
        finishHtml()
    }
    }
// asks roster questions for intern then asks for next employee
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

// asks roster questions for engineer then asks for next employee
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

// 
// Generating HTML
// 

// starter html script
const html = `<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
</head>

<body>
    <h1>My Team</h1>`;
 
// end of html script
const endHtml = `
    </body>

    </html>`;

// card formatting function
const createCard = (name, position, id, email, thirdItem) => {
    let card = `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${name}/h5>
        <p class="card-text">${position}</p>
    </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Id: ${id}</li>
        <li class="list-group-item">email: ${email}</li>
        <li class="list-group-item">${thirdItem}</li>
      </ul>
    </div>`;
    return card

}

// choose card type by job title
const makeProfile = (answers, position) => {
    let card;
    if (position == 'manager') {
        card = makeManager(answers)
    } else if (position == 'engineer') {
        card = makeEngineer(answers)
    } else if (position == 'intern') {
        card = makeIntern(answers)
    } else {
        let err = new Error("Can't find employee position");
        console.error(err)
    }
    console.log(card)
    html.concatenate(card)

}

// create manager card
const makeManager = (answers) => {
    let manager = new Manager(answers)
    let office = `Office Number: ${manager.getOffice()}`
    let card = createCard(manager.getName(), manager.getRole(), manager.getId(), manager.getEmail(), office);
    console.log(manager)
    return card

}

// create engineer card
const makeEngineer = (answers) => {
    let engineer = new Engineer(answers);
    let github = `Github: ${engineer.getGithub()}`;
    let card = createCard(engineer.getName(), engineer.getRole(), engineer.getId(), engineer.getEmail(), github);
    console.log(engineer);
    return card
}

// create intern card
const makeIntern = (answers) => {
    let intern = new Intern(answers);
    let school = `School: ${intern.getSchool()}`;
    let card = createCard(intern.getName(), intern.getRole(), intern.getId(), intern.getEmail(), school);
    console.log(intern)
    return card
}

// write html to file
const finishHtml = (html) => {
    html.concatenate(endHtml);
    fs.writeFile('index.html', html, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
}