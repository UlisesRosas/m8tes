const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const render = require('./src/htmlTemplate');
const teamMembersArr = [];

// add manager function 
const addManager = async() => {
     // destructured input items to be user input values
    const {name, id, email, officeNumber} = await inquirer.prompt([
        {
            type: 'input',
            // we are using the same name given to the object property ex this.name <----- we are using the 'name' part
            name: 'name',
            message: 'Please enter your name (required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'id',
            message: 'Please enter your ID (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your ID');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter your office number (Required)',
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log('Please enter your office number');
                    return false;
                }
            }
        }
    ])
        // using user input values for method prop
            // making new object with manager constructor
            const manager = new Manager(name, id, email, officeNumber);
            //Pushing new object in to temMembers array
            teamMembersArr.push(manager);
            // console.log(teamMembersArr);
            addTeamMember();
};

addManager();


// cross roads function for user to add different employees "addTeamMember"
const addTeamMember = async () => {
    const { memberChoice } = await inquirer.prompt([
        {
            type: 'list',
            name: 'memberChoice',
            message: 'What team member would you like to add?',
            choices: ['add Engineer', 'add Intern', 'quit and build']
        }
    ])
    switch (memberChoice) {
        case 'add Engineer':
            return addEngineer();
        case 'add Intern':
            return addIntern();
        case 'quit and build':
            return buildTeam();

    }
}


const addEngineer = async () => {
    const engineerInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter your name (required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'id',
            message: 'Please enter your ID (required)',
            validate: idinput => {
                if (idinput) {
                    return true;
                } else {
                    console.log('Please enter your ID');
                    return false;
                }
            }

        },

        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email(required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'github',
            mssage: 'Please enter your GitHub (required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub');
                    return false;
                }
            }
        }

    ])
    console.log('Engineer added!');
    // deconstuctor for engineer properties 
    const { name, id, email, github } = engineerInput;
    // new object instance
    const engineer = new Engineer(name, id, email, github);
    // push the new object to the array
    teamMembersArr.push(engineer);
    // console.log(engineer);
    // console.log(teamMembersArr);
    // returns us to the selection menu for another teammember
    addTeamMember();
}

const addIntern = async() => {
     const { name, id, email, school } = await
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter your name (required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'id',
            message: 'Please enter your ID (required)',
            validate: idinput => {
                if (idinput) {
                    return true;
                } else {
                    console.log('Please enter your ID');
                    return false;
                }
            }

        },

        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email(required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'school',
            mssage: 'Please enter the school you graduated from(required)',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter your school');
                    return false;
                }
            }
        }

    ]) 
    console.log('Intern added!');
            // deconstructed object props assigned to intern input values
            // const { name, id, email, school } = internInput;
            // intern object instance with assigned props
            const intern = new Intern(name, id, email, school);
            // push new team member in to array
            teamMembersArr.push(intern);
            console.log(teamMembersArr);
            return addTeamMember();
}


// **Build team 
const buildTeam = () => {
    // maDE index file and then passed in data 
    fs.writeFileSync('index.html', render(teamMembersArr))
}