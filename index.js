const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engenieer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const teamMembersArr = [];

// add manager function 
const addManager = () => {
    return inquirer.prompt([
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
            validate: nameInput => {
                if (nameInput) {
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
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your office number');
                    return false;
                }
            }
        }
    ])
// using user input values for method props
    .then(managerInput =>{
        // destructured input items to be user input values
        const {name, id, email, officeNumber} = managerInput;
        // making new object with manager constructor
        const manager = new Manager(name, id, email, officeNumber);
        //Pushing new object in to temMembers array
        teamMembersArr.push(manager);
        console.log(teamMembersArr);
        addTeamMember();

    })

};

addManager();


// cross roads function for user to add different employees "addTeamMember"
const addTeamMember = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name:'memberChoice',
            message: 'What team member would you like to add?',
            choices: ['add Engineer', 'add Intern', 'quit and build']
        },
    ])
    .then (choiceInput => {
        console.log(choiceInput);
        // to do
        // determine what the user has selected

        
         if (choiceInput.memberChoice === 'add Engineer'){
             // return addEngineer function call to inquire about engineer
             console.log('engineer added');
            //  return inquirer prompt for engineer
         };
        //  if (addIntern){
        //     // return addIntern function call to inquire about intern
        // }
    })

}

// **addEngineer 
// **addIntenr 
// **Build team 
