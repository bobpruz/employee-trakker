const inquirer = require("inquirer");

const db = require("../db/connection");
const app = require("../server");

const update = {
// update employee role
updateEmpoyeeRole() {
    let sql = `select * from employee`;

    db.promise()
    .query(sql)
    .then(([data]) => {
      const employees = data.map(
        ({ id, first_name, last_name }) => ({
          name: first_name + " " + last_name,
          value: id,
        })
      );
    inquirer.prompt([
        {
            type: 'list',
            name: 'name',
            message: 'Choose employee to update',
            choices: employees

        }
    ])
    })
}
}

module.exports = update;
