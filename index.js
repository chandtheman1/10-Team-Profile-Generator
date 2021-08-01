const inquirer = require('inquirer');

const employees = [];

const addEmployees = () => {
    inquirer.prompt([
        {
            name: "employeeName",
            message: "What is the employee's name?",
            type: "input"
        },
        {
            name: "email",
            message: "What is the employee's email address?",
            type: "input",
        },
        {
            name: "id",
            message: "What is the employee's ID number?",
            type: "intput",
        },
        {
            name: "role",
            message: "What is their role?",
            type: 'list',
            // checks if there is at least one manager in the employee list
            choices: function() {
                if (employees.some(employee => employee.role === "Manager")) {
                    return ["Engineer", "Intern"]
                } else {
                    return ["Engineer", "Intern", "Manager"]
                }
            },
        },
        {
            name: "officeNumber",
            message: "What is the Manager's Office Number?",
            type: "input",
            when: (answers) => answers.role === "Manager",
        },
        {
            name: "github",
            message: "What is your Github username?",
            type: "input",
            when: (answers) => answers.role === "Engineer",
        },
        {
            name: "school",
            message: "What is the Intern's School?",
            type: "input",
            when: (answers) => answers.role === "Intern",
        },
        {
            name: "addMore",
            message: "Are there more employees?",
            type: "confirm",
        }
    ])
}


function init() {
    addEmployees();
}

init();