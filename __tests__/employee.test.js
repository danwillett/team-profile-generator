Employee = require('../lib/employee')

describe("Employee", () => {
    describe("Initilization", () => {
        it("should return an object with a 'name', 'id', and 'email' properties when called with the 'new' keyword", () => {
            let obj = new Employee();
            expect("name" in obj).toEqual(true)
            expect("id" in obj).toEqual(true)
            expect("email" in obj).toEqual(true)
        })

        it("should set 'name', 'id', and 'email' with keys of input object when created", () => {
            let ans = {
                name: "Sasha",
                id: 304,
                email: "s@gmail.com"
            }
            let obj = new Employee(ans)
            expect("name" in obj).toEqual(ans.name)
            expect("id" in obj).toEqual(ans.id)
            expect("email" in obj).toEqual(ans.email)
        })
        
    })
    

})