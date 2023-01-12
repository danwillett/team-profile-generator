const Engineer = require('../lib/engineer')

const ans = {
    name: "Danny",
    id: "304",
    email: "d@gmail.com",
    github: "danwillett"
}
describe("Engineer", () => {
    describe("Initilization", () => {
        it("should return an object with a 'name', 'id', 'email', and 'github' properties when called with the 'new' keyword", () => {
            let obj = new Engineer(ans);
            expect("name" in obj).toEqual(true)
            expect("id" in obj).toEqual(true)
            expect("email" in obj).toEqual(true)
            expect("github" in obj).toEqual(true)
        })

        it("should set 'name', 'id', 'email', and 'github' with keys of input object when created", () => {
            let obj = new Engineer(ans)
            expect(obj.name).toEqual(ans.name)
            expect(obj.id).toEqual(ans.id)
            expect(obj.email).toEqual(ans.email)
            expect(obj.github).toEqual(ans.github)
        })

    })

    describe("getName", () => {
        it("should return the name attribute of the Engineer class when called", () => {
            let obj = new Engineer(ans)
            expect(ans.name).toEqual(obj.getName())
        })
    })

    describe("getEmail", () => {
        it("should return the email attribute of the Engineer class when called", () => {
            let obj = new Engineer(ans)
            expect(ans.email).toEqual(obj.getEmail())
        })
    })

    describe("getID", () => {
        it("should return the name attribute of the Engineer class when called", () => {
            let obj = new Engineer(ans)
            expect(ans.id).toEqual(obj.getId())
        })
    })

    describe("getRole", () => {
        it("should return 'Engineer' when called", () => {
            let obj = new Engineer(ans)
            expect("Engineer").toEqual(obj.getRole())
        })
    })

    describe("getGithubName", () => {
        it("should return the github key from the class object", () => {
            let obj = new Engineer(ans)
            expect(ans.github).toEqual(obj.getGithubName())
        })
    })

    describe("getGithub", () => {

        global.fetch = jest.fn(() =>
                Promise.resolve({
                    json: () => Promise.resolve('https://github.com/danwillett'),
                })
            );

            beforeEach(() => {
                fetch.mockClear();
            });

        it("should start a fetch request when called", async () => {
            let obj = new Engineer(ans)
            const link = await obj.getGithub()

            expect(fetch).toHaveBeenCalledTimes(1);
        })
    })

})
