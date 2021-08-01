const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./lib/generateHTML');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');


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
            message: "What is the Engineer's Github username?",
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
    ]).then(answers => {
        employees.push(answers);
        // console.log(employees);

        if (answers.addMore) {
            addEmployees();
        } else if (!employees.some(employee => employee.role === "Manager")) {
            console.log("You must add a Manager!");
            addEmployees();
        } else {
            console.log(employees);
            sortEmployeeArray(employees);
        }
    })
}

function writeToFile (data) {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.error(err);
            return
        }
    })
}

function sortEmployeeArray(data) {
    const managerArray = data.filter(function (manager) {
        return manager.role == 'Manager';
    }).map(employee => new Manager(employee.employeeName, employee.id, employee.email, employee.officeNumber))
    
    // console.log(managerArray[0]);

    const engineerArray = data.filter(function (engineer) {
        return engineer.role == 'Engineer';
    }).map(employee => new Engineer(employee.employeeName, employee.id, employee.email, employee.github))

    console.log(engineerArray);

    const internArray = data.filter(function(intern) {
        return intern.role == "Intern";
    })

    
}






function init() {
    addEmployees();
    writeToFile(generateHTML.generateHTML());
}

init();