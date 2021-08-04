const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    it("can construct Engineer object", () => {
        const test = new Engineer();
        expect(typeof(test)).toBe("object");
    });

    describe("Constructor", () => {

        it("can set the name", () => {
            const testValue = "Chandler";
            const test = new Engineer(testValue);
            expect(test.name).toBe(testValue);
        });

        it("can set the ID", () => {
            const testValue = 1;
            const test = new Engineer("Chandler", testValue);
            expect(test.id).toBe(testValue);
        });

        it("can set email", () => {
            const testValue = "welcome@hello.com";
            const test = new Engineer("Chandler", 1, testValue);
            expect(test.email).toBe(testValue);
        });

        it("can set Github", () => {
            const testValue = "chandtheman1"
            const test = new Engineer("Chandler", 1, "welcome@hello.com", testValue);
            expect(test.github).toBe(testValue);
        });
    });

    describe("getMethods", () => {
        it("can get Github username", () => {
            const testValue = "chandtheman1"
            const test = new Engineer("Chandler", 1, "welcome@hello.com", testValue);
            expect(test.getGithub()).toBe(testValue);
        });

        it("returns Engineer via getRole", () => {
            const test = new Engineer("Chandler", 1, "welcome@hello.com", "chandtheman1");
            expect(test.getRole()).toBe("Engineer");
        });
    });

});