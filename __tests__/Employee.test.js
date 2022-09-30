// Employee Constructor 
const Employee = require('../lib/Employee');
// Creates employee object
test('creates an employee object', () => {
    const employee = new Employee('Dan', 69, 'dpapert@gmail.com');
    // Tests that all employee values are valid
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});
// Tests getName() by retrieving a sample employee name. Result should be 'Dan'.
test('gets employee name', () => {
    const employee = new Employee('Dan', 69, 'dpapert@gmail.com');
    expect(employee.getName()).toEqual(expect.any(String));
});
// Tests getId() by retrieving a sample employee id. Result should be '69'.
test('gets employee ID', () => {
    const employee = new Employee('Dan', 69, 'dpapert@gmail.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});
// Tests getEmail() by retrieving a sample employee id. Result should be 'dpapert@gmail.com'.
test('gets employee email', () => {
    const employee = new Employee('Dan', 69, 'dpapert@gmail.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});
// Tests getRole() by retrieving a sample employee id. Result should be "Employee".
test('gets role of employee', () => {
    const employee = new Employee('Dan', 69, 'dpapert@gmail.com');
    expect(employee.getRole()).toEqual("Employee");
}); 