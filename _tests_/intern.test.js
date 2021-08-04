const Intern = require("../lib/intern");

describe("Intern", () => {
    it("can construct Intern object", () => {
        const test = new Intern();
        expect(typeof(test)).toBe("object");
    });

    describe("Constructor", () => {

        it("can set the name", () => {
            const testValue = "Chandler";
            const test = new Intern(testValue);
            expect(test.name).toBe(testValue);
        });

        it("can set the ID", () => {
            const testValue = 1;
            const test = new Intern("Chandler", testValue);
            expect(test.id).toBe(testValue);
        });

        it("can set email", () => {
            const testValue = "welcome@hello.com";
            const test = new Intern("Chandler", 1, testValue);
            expect(test.email).toBe(testValue);
        });

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