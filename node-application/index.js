require('dotenv').config();

const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

// MySQL connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Connect to MySQL
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

// Define a route to fetch data
app.get('/data', (req, res) => {
  connection.query('CALL GetDetails()', (error, results, fields) => {
    if (error) throw error;
    res.json(results[0]);
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

