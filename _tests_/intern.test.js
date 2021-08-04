const Intern = require("../lib/intern");

describe("Intern", () => {
    it("can construct Intern object", () => {
        const test = new Intern();
        expect(typeof(test)).toBe("object");
    });

    describe("Constructor", () => {
        it("can set school", () => {
            const testValue = "Monash"
            const test = new Intern("Chandler", 1, "welcome@hello.com", testValue);
            expect(test.school).toBe(testValue);
        });
    });

    describe("getMethods", () => {
        it("can get School", () => {
            const testValue = "Monash"
            const test = new Intern("Chandler", 1, "welcome@hello.com", testValue);
            expect(test.getSchool()).toBe(testValue);
        });

        it("returns Intern via getRole", () => {
            const test = new Intern("Chandler", 1, "welcome@hello.com", "Monash");
            expect(test.getRole()).toBe("Intern");
        });
    });

});