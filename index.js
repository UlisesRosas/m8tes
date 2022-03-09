const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engenieer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const teamMembersArr = [];

// add manager function 
const addManager = () => {
    return inquirer.prompt([
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
             return inquirer.prompt([
                 {
                     type: 'input',
                     name: 'name',
                     message:'Please enter your name (required)',
                     validate: nameInput => {
                         if(nameInput) {
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
                         if(idinput){
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
                    validate: emailInput =>{
                        if(emailInput) {
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
                         if(githubInput){
                             return true;
                         } else {
                             console.log('Please enter your GitHub');
                             return false;
                         }
                     }
                 }

             ])
            //  assigning user input values to object
             .then (engineerInput => {
                console.log('engineer added');
                // deconstuctor for engineer properties 
                const {name, id, email, github} = engineerInput;
                // new object instance
                const engineer = new Engineer(name, id, email, github);     
                // push the new object to the array
                teamMembersArr.push(engineer);
                console.log(teamMembersArr);
                // returns us to the selection menu for another teammember
                addTeamMember();

            })
        
        }  //  return inquirer prompt for intern in the next if statement
         else if (addIntern){
            // return addIntern function call to inquire about intern
            
        }
         
    })

}

// **addEngineer 
// **addIntenr 
// **Build team 
