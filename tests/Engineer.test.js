// two dots because it has to leave the tests folder and in to the lib folder 
const Engineer = require('../lib/Engineer.js');

test('creates an engeneer object', () => {
    // testing if Engineer is an object
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe('object');
});
test('Engineer constructor binds github property', () => {
    const github = 'githubname'
    const engineer = new Engineer('dane', 14, '@someemail', github);
    expect(engineer.github).toBe(github);
});

// testing getGithub method
test('engineer method returns githubname', () => {
    // use the property that the method is returnig for the test
    const github = '@githubname';
    const engineer = new Engineer('dane', 14, '@someemail', github);
    // testing if the prototype is using method from constructor
    expect(engineer.getGithub()).toBe(github);
});