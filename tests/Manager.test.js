const Manager = require('../lib/Manager.js');

// tests to see if Manager constructor creates an object
test('object is created from manager constructor', () => {
    //object instance from Manager constructor
    const manager = new Manager();
    // expected result
    expect(typeof (manager)).toBe('object');
});

test('manager constructor binds office number property', () => {
    const officeNumber = 15;
    // pass in all propreries hypothetical val except for the one testing for
    const manager = new Manager('Dane', 14, '@someEmail', officeNumber);
    // expected result
    expect(manager.officeNumber).toBe(officeNumber);
});

test('manager getOfficeNumber method returns officeNumber', () => {
    const officeNumber = 15;
    // pass in all propreries hypothetical val except for the one testing for
    const manager = new Manager('Dane', 14, '@someEmail', officeNumber);
    // expected result
    expect(manager.getOfficeNumber()).toBe(officeNumber);
});