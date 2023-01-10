const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const fs = require("fs");

const html = `<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
</head>

<body>
    <h1>My Team</h1>`;

const endHtml = `
    </body>

    </html>`;

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

// const appendHtml = (html, card) => {
//     html.concatenate(card)
// }

const makeManager = (answers) => {
    let manager = new Manager(answers)
    let office = `Office Number: ${manager.getOffice()}`
    let card = createCard(manager.getName(), manager.getRole(), manager.getId(), manager.getEmail(), office);
    console.log(manager)
    return card

}

const makeEngineer = (answers) => {
    let engineer = new Engineer(answers);
    let github = `Github: ${engineer.getGithub()}`;
    let card = createCard(engineer.getName(), engineer.getRole(), engineer.getId(), engineer.getEmail(), github);
    console.log(engineer);
    return card
}

const makeIntern = (answers) => {
    let intern = new Intern(answers);
    let school = `School: ${intern.getSchool()}`;
    let card = createCard(intern.getName(), intern.getRole(), intern.getId(), intern.getEmail(), school);
    console.log(intern)
    return card
}

const finishHtml = (html) => {
    html.concatenate(endHtml);
    fs.writeFile('index.html', html, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
}