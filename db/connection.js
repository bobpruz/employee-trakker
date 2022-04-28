const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // Your MySQL username,
    user: process.env.DB_NAME,
    // Your MySQL password
    password: process.env.DB_PW,
    database: "employee",
  },
  console.log("Connected to the employee database.")
);

module.exports = db;