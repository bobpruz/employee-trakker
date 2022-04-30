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
          "List all Departments",
          "List all Roles",
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
      if (choices === "List Departments") {
        list.listAllDepartments();
      }
      if (choices === "List Roles") {
        list.listAllRoles();
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
