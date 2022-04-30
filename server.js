const inquirer = require("inquirer");
const db = require("./db/connection");

// import prompt functions
const add = require("./utils/add");

const promptUser = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choices",
        message: "Please select a task",
        choices: ["Add a Department", "Add a Role", "Add an Employee", "Exit"],
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
