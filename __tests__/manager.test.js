const Manager = require('../lib/manager')

const ans = {
    name: "Sasha",
    id: "304",
    email: "s@gmail.com",
    office: "503"
}
describe("Manager", () => {
    describe("Initilization", () => {
        it("should return an object with a 'name', 'id', 'email', and 'officeNumber' properties when called with the 'new' keyword", () => {
            let obj = new Manager(ans);
            expect("name" in obj).toEqual(true)
            expect("id" in obj).toEqual(true)
            expect("email" in obj).toEqual(true)
            expect("officeNumber" in obj).toEqual(true)
        })

        it("should set 'name', 'id', 'email', and 'officeNumber' with keys of input object when created", () => {
            let obj = new Manager(ans)
            expect(obj.name).toEqual(ans.name)
            expect(obj.id).toEqual(ans.id)
            expect(obj.email).toEqual(ans.email)
            expect(obj.officeNumber).toEqual(ans.office)
        })
        
    })

    describe("getName", () => {
        it("should return the name attribute of the Manager class when called", () => {
            let obj = new Manager(ans)
            expect(ans.name).toEqual(obj.getName())
        })
    })

    describe("getEmail", () => {
        it("should return the email attribute of the Manager class when called", () => {
            let obj = new Manager(ans)
            expect(ans.email).toEqual(obj.getEmail())
        })
    })

    describe("getID", () => {
        it("should return the name attribute of the Manager class when called", () => {
            let obj = new Manager(ans)
            expect(ans.id).toEqual(obj.getId())
        })
    })

    describe("getRole", () => {
        it("should return 'Manager' when called", () => {
            let obj = new Manager(ans)
            expect("Manager").toEqual(obj.getRole())
        })
    })

    describe("getOffice()", () => {
        it("should return the manager's office number when called", () => {
            let obj = new Manager(ans)
            expect(ans.office).toEqual(obj.getOffice())
        })
    })

})
