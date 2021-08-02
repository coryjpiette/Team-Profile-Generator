  
const Intern = require("../lib/intern");

test("SETS correct school successfully", () => {
    const testValue = "UoU";
    const e = new Intern("Joe", 1, "test@test.com", testValue, "Intern");
    expect(e.school).toBe(testValue);
});

test("GETS correct role successfully", () => {
    const testValue = "Intern";
    const e = new Intern("Joe", 1, "test@test.com", "UCLA", "Intern");
    expect(e.getRole()).toBe(testValue);
});

test("GETS correct school successfully", () => {
    const testValue = "UoU";
    const e = new Intern("Joe", 1, "test@test.com", testValue, "Intern");
    expect(e.getSchool()).toBe(testValue);
});