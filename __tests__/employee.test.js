Employee = require('../lib/employee')

const ans = {
    name: "Sasha",
    id: "304",
    email: "s@gmail.com"
}
describe("Employee", () => {
    describe("Initilization", () => {
        it("should return an object with a 'name', 'id', and 'email' properties when called with the 'new' keyword", () => {
            let obj = new Employee(ans);
            expect("name" in obj).toEqual(true)
            expect("id" in obj).toEqual(true)
            expect("email" in obj).toEqual(true)
        })

        it("should set 'name', 'id', and 'email' with keys of input object when created", () => {
            let obj = new Employee(ans)
            expect(obj.name).toEqual(ans.name)
            expect(obj.id).toEqual(ans.id)
            expect(obj.email).toEqual(ans.email)
        })
        
    })

    describe("getName", () => {
        it("should return the name attribute of the Employee class when called", () => {
            let obj = new Employee(ans)
            expect(ans.name).toEqual(obj.getName())
        })
    })

    describe("getEmail", () => {
        it("should return the email attribute of the Employee class when called", () => {
            let obj = new Employee(ans)
            expect(ans.email).toEqual(obj.getEmail())
        })
    })

    describe("getID", () => {
        it("should return the name attribute of the Employee class when called", () => {
            let obj = new Employee(ans)
            expect(ans.id).toEqual(obj.getId())
        })
    })

})