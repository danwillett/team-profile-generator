const Intern = require('../lib/intern')

const ans = {
    name: "Sasha",
    id: "304",
    email: "s@gmail.com",
    school: "Berkeley"
}
describe("Intern", () => {
    describe("Initilization", () => {
        it("should return an object with a 'name', 'id', 'email', and 'school' properties when called with the 'new' keyword", () => {
            let obj = new Intern(ans);
            expect("name" in obj).toEqual(true)
            expect("id" in obj).toEqual(true)
            expect("email" in obj).toEqual(true)
            expect("school" in obj).toEqual(true)
        })

        it("should set 'name', 'id', 'email', and 'school' with keys of input object when created", () => {
            let obj = new Intern(ans)
            expect(obj.name).toEqual(ans.name)
            expect(obj.id).toEqual(ans.id)
            expect(obj.email).toEqual(ans.email)
            expect(obj.school).toEqual(ans.school)
        })
        
    })

    describe("getName", () => {
        it("should return the name attribute of the Intern class when called", () => {
            let obj = new Intern(ans)
            expect(ans.name).toEqual(obj.getName())
        })
    })

    describe("getEmail", () => {
        it("should return the email attribute of the Intern class when called", () => {
            let obj = new Intern(ans)
            expect(ans.email).toEqual(obj.getEmail())
        })
    })

    describe("getID", () => {
        it("should return the name attribute of the Intern class when called", () => {
            let obj = new Intern(ans)
            expect(ans.id).toEqual(obj.getId())
        })
    })

    describe("getRole", () => {
        it("should return 'Intern' when called", () => {
            let obj = new Intern(ans)
            expect("Intern").toEqual(obj.getRole())
        })
    })

    describe("getSchool()", () => {
        it("should return the Intern's school number when called", () => {
            let obj = new Intern(ans)
            expect(ans.school).toEqual(obj.getSchool())
        })
    })

})