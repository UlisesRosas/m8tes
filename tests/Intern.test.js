const Intern = require('../lib/Intern.js');

// testing Intern objectnso see if its an object
test('creates intern object', () => {
    // builds object intance from intern constructor
    const intern = new Intern();
    // expacts intern to be object    
    expect(typeof (intern)).toBe('object');
});


test('intern constructor binds school property', () => {
    // variable for school prop with hypathetical value
    const school = 'school';
    // constructor with all hypathetical props and their hypathelical values except the one testing for we dont pass its value
    const intern = new Intern('dave', 14, '@someemail', school);
    expect(intern.school).toBe(school);
});

test('intern getSchool method returns school', () => {
    // use prop that teh method is returning
    const school = 'school';
    // passing in all props values except the one that method is going to return
    const intern = new Intern('dave', 14, '@someemail', school);
    expect(intern.getSchool()).toBe(school);
});