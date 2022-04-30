const inquirer = require("inquirer");

const db = require("../db/connection");
const app = require("../server");

const update = {

  // update employee's role
  updateEmployeeRole() {
      // get employees 
      let sql = `SELECT * FROM employee`;
    
      db.promise().query(sql).then(([data]) => {
         const employees = data.map(({ id, first_name, last_name }) => ({ name: first_name + " " + last_name, value: id }));
    
         // select employee to update
         inquirer.prompt([
          {
            type: 'list',
            name: 'name',
            message: "Select employee would you like to update?",
            choices: employees
          }
        ])
          // Then push selected choice the array
          .then(empChoice => {
            const employee = empChoice.name;
            const params = []; 
            params.push(employee);
    
            // Map roles title
            let sql = `SELECT * FROM roles`;
    
            db.promise().query(sql).then(([data]) => {
              const roles = data.map(({ id, title }) => ({ name: title, value: id }));
              
                // select employee new role
                inquirer.prompt([
                  {
                    type: 'list',
                    name: 'role',
                    message: "Select the employee's new role?",
                    choices: roles
                  }
                ])
                    // then push selected roles to the array
                    .then(roleChoice => {
                    const role = roleChoice.role;
                    params.push(role); 
                    
                    let employee = params[0]
                    params[0] = role
                    params[1] = employee 
                     
                    // Update employee role
                    let sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
    
                    db.promise().query(sql, params).then(() => {
                      console.log("This employee's role has been updated!");
                      app.promptUser();
                    }).catch((error) => console.log(error));
                  });
              });
          });
      });
    }
  }

module.exports = update;
