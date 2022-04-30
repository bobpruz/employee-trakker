const conTable = require("console.table");
const app = require("../server");
const db = require("../db/connection");

const list = {
  // list departments
  listAllDepartments() {
    const sql = `SELECT * FROM department`;

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
  const sql = `SELECT * FROM roles`;

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
  const sql = `SELECT * FROM employees`;

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