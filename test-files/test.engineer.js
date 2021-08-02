
const Engineer = require("../lib/engineer");

test("SETS GitHUb account successfully", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Joe", 1, "test@test.com", testValue, "Engineer");
    expect(e.github).toBe(testValue);
});

test("GETS correct role successfully", () => {
    const testValue = "Engineer";
    const e = new Engineer("Joe", 1, "test@test.com", "GitHubUser", "Engineer");
    expect(e.getRole()).toBe(testValue);
});

test("GETS GitHub username successfully", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Joe", 1, "test@test.com", testValue, "Engineer");
    expect(e.getGithub()).toBe(testValue);
});