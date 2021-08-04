const Employee = require("../lib/employee");

describe("Employee", () => {
    it("can construct Employee object", () => {
        const test = new Employee();
        expect(typeof(test)).toBe("object");
    });
    
    describe("Constructor", () => {
        it("can set the person's name", () => {
            const person = "Chandler";
            const test = new Employee(person);
            expect(test.name).toBe(person);
        });
        
        it("can set the id", () => {
            const testValue = 1;
            const test = new Employee("Chandler", testValue);
            expect(test.id).toBe(testValue);
        });
        
        it("can set the email", () => {
            const testValue = "welcome@hello.com";
            const test = new Employee("Chandler", 1, testValue);
            expect(test.email).toBe(testValue);
        });
    });

    describe("Get methods", () => {
        it("can get person's name via getName", () => {
            const testValue = "Chandler";
            const test = new Employee(testValue);
            expect(test.getName()).toBe(testValue);
        });
        
        it("can get id via getId", () => {
            const testValue = 1;
            const test = new Employee("Chandler", testValue);
            expect(test.getId()).toBe(testValue);
        });
        
        it("can get email via getEmail", () => {
            const testValue = "welcome@hello.com";
            const test = new Employee("Chandler", 1, testValue);
            expect(test.getEmail()).toBe(testValue);
        });
        
        it("returns \"Employee\" via getRole", () => {
            const testValue = "Employee";
            const test = new Employee("Chandler", 1, "welcome@hello.com");
            expect(test.getRole()).toBe(testValue);
        });
    });
});