const Employee = require("../lib/employee");

test("Verifies employee instance successfully", () => {
    const e = new Employee();
    expect(typeof (e)).toBe("object");
});

test("SETS name successfully", () => {
    const name = "Cory";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("SETS id successfully", () => {
    const testValue = 100;
    const e = new Employee("Joe", testValue);
    expect(e.id).toBe(testValue);

});


test("SETS email successfully", () => {
    const testValue = "test@test.com";
    const e = new Employee("Joe", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("GETS name successfully", () => {
    const testValue = "Joe";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("GETS id successfully", () => {
    const testValue = 100;
    const e = new Employee("Joe", testValue);
    expect(e.getId()).toBe(testValue);
});

test("GETS email successfully", () => {
    const testValue = "test@test.com";
    const e = new Employee("Joe", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("GETS correct role successfully", () => {
    const testValue = "Employee";
    const e = new Employee("Cory", 1, "test@test.com", "Employee");
    expect(e.getRole()).toBe(testValue);
});

test("Verifies employee instance successfully", () => {
    const e = new Employee();
    expect(typeof (e)).toBe("object");
});

test("SETS email successfully", () => {
    const testValue = "test@test.com";
    const e = new Employee("Joe", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("GETS name successfully", () => {
    const testValue = "Joe";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("GETS id successfully", () => {
    const testValue = 100;
    const e = new Employee("Joe", testValue);
    expect(e.getId()).toBe(testValue);
});

test("GETS email successfully", () => {
    const testValue = "test@test.com";
    const e = new Employee("Joe", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("GETS correct role successfully", () => {
    const testValue = "Employee";
    const e = new Employee("Cory", 1, "test@test.com", "Employee");
    expect(e.getRole()).toBe(testValue);
});