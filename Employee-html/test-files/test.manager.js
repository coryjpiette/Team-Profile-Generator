const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

test("SETS office number successfully", () => {
    const testValue = 100;
    const e = new Manager("Joe", 1, "test@test.com", testValue, "Manager");
    expect(e.officeNumber).toBe(testValue);
});

test("GETS correct role successfully", () => {
    const testValue = "Manager";
    const e = new Manager("Joe", 1, "test@test.com", 100, "Manager");
    expect(e.getRole()).toBe(testValue);
});

test("GETS correct office number successfully", () => {
    const testValue = 100;
    const e = new Manager("Joe", 1, "test@test.com", testValue, "Manager");
    expect(e.getOfficeNumber()).toBe(testValue);
});