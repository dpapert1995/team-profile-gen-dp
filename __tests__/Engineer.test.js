// Engineer Constructor 
const Engineer = require('../lib/Engineer');
// Creates engineer object
test('creates an Engineer object', () => {
    const engineer = new Engineer('Dan', 69, 'dpapert@gmail.com', 'dpapert1995');
    // Tests that all engineer parameters are valid
    // I already tested that it's dependency, Employee, passed the test. 
    // So we only need to test for parameters specific to the Engineer class.
    expect(engineer.github) .toEqual(expect.any(String));
});
// Tests getGithub() by retrieving a sample employee name. Result should be dpapert1995'.
test('gets engineer github value', () => {
    const engineer = new Engineer('Dan', 69, 'dpapert@gmail.com', 'dpapert1995');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});
// Tests getRole() by retrieving a sample employee id. Result should be "Engineer".
test('gets role of employee', () => {
    const engineer = new Engineer('Dan', 69, 'dpapert@gmail.com', 'dpapert1995');
    expect(engineer.getRole()).toEqual("Engineer");
});