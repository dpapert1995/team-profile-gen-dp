// Manager constructor
const Manager = require('../lib/Manager');
// Creates the manager object
test('creates an Manager object', () => {
    const manager = new Manager('Dan', 69, 'dpapert@gmail.com', 420);
    // Tests that all manager parameters are valid
    // I already tested that it's dependency, Employee, passed the test. 
    // So we only need to test for parameters specific to the Manager class.
    expect(manager.officeNumber).toEqual(expect.any(Number));
});
// Tests getRole() by retrieving a sample employee id. Result should be "Manager".
test('gets role of employee', () => {
    const manager = new Manager('Dan', 69, 'dpapert@gmail.com', 420);
    expect(manager.getRole()).toEqual("Manager");
}); 