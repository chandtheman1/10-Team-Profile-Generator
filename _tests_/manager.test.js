const Manager = require('../lib/manager');

describe("Manager", () => {
    it("can construct Manager object", () => {
        const test = new Manager();
        expect(typeof(test)).toBe("object");
    });
    
    describe("Constructor", () => {

        it("can set the name", () => {
            const person = "Chandler";
            const test = new Manager(person);
            expect(test.name).toBe(person);
        });

        it("can set the ID", () => {
            const testValue = 1;
            const test = new Manager("Chandler", testValue);
            expect(test.id).toBe(testValue);
        });

        it("can set email", () => {
            const testValue = "welcome@hello.com";
            const test = new Manager("Chandler", 1, testValue);
            expect(test.email).toBe(testValue);
        });

        it("can set the Office Number", () => {
            const testValue = 123456;
            const test = new Manager("Chandler", 1, "welcome@hello.com", testValue);
            expect(test.officeNumber).toBe(testValue);
        });

    });

    describe("getMethods", () => {

        it("get Office number with the method getOfficeNumber", () => {
            const testValue = 123456;
            const test = new Manager("Chandler", 1, "welcome@hello.com", testValue);
            expect(test.getOfficeNumber()).toBe(testValue);
        });

        it("getRole() returns Manager", () => {
            const test = new Manager("Chandler", 1, "welcome@hello.com", 123456);
            expect(test.getRole()).toBe("Manager");
        });
    });
})