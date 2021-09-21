const fs = require('fs');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const express = require('express');
const consoleTable = require('console.table');
const { prompt } = require('inquirer');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const db = mysql.addNew(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'work_db'
    },
);

function initialize() {
    inquirer
.prompt({
         type: 'list',
         name: 'homePage',
         message: 'Please select one of the following',
        choices: ["see all departments",
                "see all roles",
                " see all employees",
                'Add Departments"',
                'Add Roles',
                'Add Employees',
                'Update Role',
            ]
        })
        .then(function (selected) {
            switch (selected. initialize) {
                case "see all departments":
                    seeDepartments();
                    break;

                case "see all roles":
                    seeRoles();
                    break;

                case "see all employees":
                    seeEmployee();
                    break;

                case "Add Departments":
                    seeDepartment();
                    break;

                case "Add Roles":
                    seeRoles();
                    break;

                case "Add Employee":
                    addEmployee();
                    break;
                case "Update Role":
                    seeRole();
                    break;
            }
        });
};


const seeDepartment = () => {
    inquirer 
    .prompt({
        type:'input',
        message:'Enter the department you would like to add',
        name:'newDepart'
    }
       .then((reply) => {
           const sql = `INSERT INTO departments (name) VALUE(?) `;
           let newDepart = reply.newDepart;

           db.query(sql, newDepart, (err, rows) => {
               console.log(`${newDepart} department was successfully added `);
               initialize();
           })
       })
    )
}

const addRole = () => {
    inquirer
    .prompt([
        {
            type:'input',
            message:'Please select which role you would like to add',
            name:'newRole'
        },
        {
            type:'input',
            message:'Enter employees salary',
            name:'newSalary'
        },
        {
            type:'input',
            message:'Enter department ID',
            name:'departments_id'
        }
    ])
    .then((reply) => {
        const sql = `INSERT INTO role (title, salary, departments_id) VALUE (?, ?, ?)`;
        reply.departments_id = parseInt(reply.departments_id);
        reply.newSalary = parseInt(reply.newSalary);
        var roleArray = [reply.newRole, reply.newSalary, reply.departments_id];

        db.query(sql, roleArray, (err, rows) => {
            console.log(`${newRole} has been added to roles`);
            initialize();
            addRole();
        });
        
    });
}

const addEmployee = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            messages:'Please enter employees first name',
            name: 'firstName'
        },
        {
            type:'input',
            message:' Please enter employees last name',
            name: 'lastName'
        },
        {
            type:'input',
            message:'Please enter employees ID',
            name: 'role'
        },
        {
            type:'input',
            message:'Please enter managers id',
            name: 'manager'
        }
    ])
    .then((reply) => {
        const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE (?, ?, ?, ?)`;
        reply.role = parseInt(reply.role);
        reply.manager = parseInt(reply.manager);
        var roleArray = [reply.firstName, reply.lastName, reply.role, reply.manager];

        db.query(sql, roleArray, (err, rows) => {
            console.log(`${reply.firstName} ${reply.lastName} has been added`);
            
            initialize();
        });
    });
}

const seeRole = () => {
    const sql = `UPDATE employee set role_id = ? WHERE id = ?`;
    var namesArray = [];

    db.query(sql, (err,rows) => {
        console.log(rows);
        for (let i = 0; i < rows.length; i++);
        let name = `${rows[i].firstName} ${rows[i].lastName}`;
        namesArray.push(name);
    })
    inquirer
    .prompt([
        {
            type:'list',
            message:'Which Employee would you like to update',
            name:'name'
        },
        {
            type:'input',
            message:'Please enter new ID',
            name:'update'
        }
    ])
    .then((reply))
}

const seeDepartments = () => {
    const sql = "SELECT * FROM department";
    
    db.query(sql, (err, rows) => {
        console.table(res);
        initialize();
        
    });
}

const seeRoles = () => {
    const sql = "SELECT * FROM role";

    db.query(sql, (err, rows)=> {
        console.table(res);
        initialize();
        
    });
}

const seeEmployee = () => {
    const sql = "SELECT * FROM employee";
    
    db.query(sql, (err, rows) => {
        console.table(res);
        initialize();
        
    });
}
app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`),
    initialize()
);




