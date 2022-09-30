// Intern Constructor 
const Intern = require('../lib/Intern');
// Creates the intern object 
test('creates an Intern object', () => {
    const intern = new Intern('Dan', 69, 'dpapert@gmail.com', 'Bucknell');
    // Tests that all intern parameters are valid.
    // I already tested that it's dependency, Employee, passed the test. 
    // Therefore we only need to test for parameters specific to the Intern class.
    expect(intern.school).toEqual(expect.any(String));
});
// Tests getSchool() by retrieving a sample employee name. Result should be 'Bucknell'.
test('gets intern school', () => {
    const intern = new Intern('Dan', 69, 'dpapert@gmail.com', 'Bucknell');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});
// Tests getRole() by retrieving a sample employee id. Result should be "Intern".
test('gets role of employee', () => {
    const intern = new Intern('Dan', 69, 'dpapert@gmail.com', 'Bucknell');
    expect(intern.getRole()).toEqual("Intern");
}); 