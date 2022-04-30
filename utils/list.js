require("console.table");
const app = require("../server");
const db = require("../db/connection");

const list = {
  // list departments
  listAllDepartments() {
    const sql = `SELECT id AS "ID", dept_name AS "dept_name" FROM department`;

    db.promise()
      .query(sql)
      .then(([response]) => {
        console.table(response);
        app.promptUser();
      })
      .catch((error) => console.log(error));
  },

  // list roles
  listAllRoles() {
    const sql = `SELECT roles.id AS "ID", roles.title AS "Title", roles.salary AS "Salary", department.dept_name AS "Department" FROM roles LEFT JOIN department ON roles.department_id = department.id`;

    db.promise()
      .query(sql)
      .then(([response]) => {
        console.table(response);
        app.promptUser();
      })
      .catch((error) => console.log(error));
  },

  // list employees
  listAllEmployees() {
    const sql = `SELECT employee.id AS "ID", employee.first_name AS "First Name", employee.last_name AS "Last Name", department.dept_name AS "Department", roles.title AS "Title", roles.salary AS "Salary", CONCAT_WS(' ', emp2.first_name, emp2.last_name ) AS "Manager" FROM employee LEFT JOIN roles ON employee.role_id = roles.id LEFT JOIN department ON roles.department_id = department.id LEFT JOIN employee AS emp2 ON employee.manager_id = emp2.id `;

    db.promise()
      .query(sql)
      .then(([response]) => {
        console.table(response);
        app.promptUser();
      })
      .catch((error) => console.log(error));
  },
};

module.exports = list;
