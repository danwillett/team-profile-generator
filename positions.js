const makeProfile = (answers, position) => {
    if (position == 'manager') {
        makeManager(answers)
    } else if (position == 'engineer') {
        makeEngineer(answers)
    } else if (position == 'intern') {
        makeIntern(answers)
    } else {
        let err = new Error("Can't find employee position");
        console.error(err)
    }
}

const makeManager()