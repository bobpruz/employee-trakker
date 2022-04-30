const inquirer = require("inquirer");
const db = require("./db/connection");

// import prompt functions
const add = require("./utils/add");
const list = require("./utils/list");

const promptUser = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choices",
        message: "Please select a task",
        choices: [
          "Add a Department",
          "Add a Role",
          "Add an Employee",
          "View all Departments",
          "View all Roles",
          "View all Employees",
          "Exit",
        ],
      },
    ])
    .then((answers) => {
      const { choices } = answers;
      // add department
      if (choices === "Add a Department") {
        add.addDepartment();
      }
      // add role
      if (choices === "Add a Role") {
        add.addRole();
      }
      // add employee
      if (choices === "Add an Employee") {
        add.addEmployee();
      }
      // list departments
      if (choices === "View all Departments") {
        list.listAllDepartments();
      }
      if (choices === "View all Roles") {
        list.listAllRoles();
      }
      if (choices === "View all Employees") {
        list.listAllEmployees();
      }
      if (choices === "Exit") {
        db.end();
      }
    });
};

// Start server after DB connection
db.connect((err) => {
  if (err) throw err;
  console.log("Database connected.");
  promptUser();
});

exports.promptUser = promptUser;
