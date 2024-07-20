import dotenv from "dotenv";
import mysql from "mysql2";
dotenv.config();

const sqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.SQL_PASSWORD,
  database: "nimble",
});

sqlConnection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database: ", err);
    return;
  }
  console.log("Connected to the database");

  // Create the table if it doesn't exist
  const createTableQuery = `
      CREATE TABLE IF NOT EXISTS invoices (
        id INT AUTO_INCREMENT PRIMARY KEY,
        currency VARCHAR(10),
        basicAmt DECIMAL(10, 2),
        taxAmt DECIMAL(10, 2),
        totalAmt DECIMAL(10, 2),
        advancePaid DECIMAL(10, 2),
        tcsApplicable BOOLEAN,
        netPayableAmt DECIMAL(10, 2),
        alternatePayee1 VARCHAR(100),
        alternatePayee2 VARCHAR(100),
        city VARCHAR(100),
        street VARCHAR(100),
        country VARCHAR(100),
        bankKey VARCHAR(50),
        bankAccount VARCHAR(50)
      );
    `;

  sqlConnection.query(createTableQuery, (err, result) => {
    if (err) {
      console.error("Error creating table: ", err);
      return;
    }
  });
});

export default sqlConnection;
