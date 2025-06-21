const mysql2 = require("mysql2/promise");
require("dotenv").config();

let connection = null;
let pool = null;

async function connectDB() {
  if (connection) {
    return connection;
  }
  
  connection = await mysql2.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "todo_app",
    port: process.env.DB_PORT || 3306,
  });
  
  console.log("Connected to the database");
  return connection;
}

// Create connection pool for better performance
function createPool() {
  if (pool) {
    return pool;
  }
  
  pool = mysql2.createPool({
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "todo_app",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
  
  return pool;
}


module.exports = { 
  connectDB, 
  pool:createPool()
};
