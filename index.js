const inquirer = require('inquirer')
const fs = require("fs");

const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")

// 
// IQUIRER Prompts
//

// first inquirer asks about manager information
const inquire = () => {
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
    }).then(()=> {
        console.log("HI")
        nextEmployee()
    })
}


// gives an inquirer prompt asking what the next employee type is
const nextEmployee = () => {
    inquirer
    .prompt([
        {
        type: 'list',
        message: "Would you like to add another employee?",
        choices: ['intern', 'engineer', 'no more employees'],  
        name: "position"
        }
    ]).then(answers => {
        console.log(answers)
        promptNextEmployee(answers)
    }        
    )
}

// given a certain employee type, asks questions
const promptNextEmployee = answers => {
        console.log(answers)
    if (answers.position == 'intern') {
        askIntern()
    } else if (answers.position == 'engineer') {
        askEngineer()
    } else {
        finishHtml(html)
    }
    }
// asks roster questions for intern then asks for next employee
const askIntern = () => {
    console.log("hi")
    inquirer
    .prompt([
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
            message: "Please enter your intern's school",
            name: 'school'
        },
    ]
        

    )
    .then(answers => {
        console.log(answers)
        makeProfile(answers, "intern")
        nextEmployee()
    }     
    )
}

// asks roster questions for engineer then asks for next employee
const askEngineer = () => {
    inquirer
    .prompt([
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
    ]
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
let html = `<html lang="en">

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
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${position}</p>
    </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Id: ${id}</li>
        <li class="list-group-item">email: <a href = "mailto: ${email}">${email}</a></li>
        <li class="list-group-item">${thirdItem}</li>
      </ul>
    </div>`;
    return card

}

// choose card type by job title
const makeProfile = async (answers, position) => {
    let card;
    if (position == 'manager') {
         card = await makeManager(answers)
    } else if (position == 'engineer') {
        card = await makeEngineer(answers)
        console.log(`card: ${card}`)
    } else if (position == 'intern') {
        card = await makeIntern(answers)
    } else {
        let err = new Error("Can't find employee position");
        console.error(err)
    }
    
    html = `${html}
    ${card}`;
    console.log(html)
}

// create manager card
const makeManager = (answers) => {
    let manager = new Manager(answers)
    let office = `Office Number: ${manager.getOffice()}`
    let card = createCard(manager.getName(), manager.getRole(), manager.getId(), manager.getEmail(), office);
    console.log(manager)
    return new Promise ((resolve, reject) => {
        resolve(card)
    })
    

}

// create engineer card
const makeEngineer = async (answers) => {
    let github
    let card
    let engineer = new Engineer(answers);
    // make this into a promise
    let link = await engineer.getGithub();
    github = `Github: ${link}`;
    card = createCard(engineer.getName(), engineer.getRole(), engineer.getId(), engineer.getEmail(), github);
    console.log(`card: ${card}`)

    return new Promise((resolve, reject) => {
        resolve(card)
    })
    
}

// create intern card
const makeIntern = (answers) => {
    let intern = new Intern(answers);
    let school = `School: ${intern.getSchool()}`;
    let card = createCard(intern.getName(), intern.getRole(), intern.getId(), intern.getEmail(), school);
    console.log(intern)
    return new Promise((resolve, reject) => {
        resolve(card)
    })
}

// write html to file
const finishHtml = (html) => {
    html = `${html}
    ${(endHtml)}`;
    fs.writeFile('index.html', html, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
}


// Run script

inquire()