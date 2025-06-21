const mysql = require("mysql2/promise");

// database configuration

const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "todo_app",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};



// create connection pool
const pool = mysql.createPool(dbConfig);


// test database connection
const testConnection = async() => {
    try{
        const connection = await pool.getConnection();
        console.log('Database connection established successfully.');
        connection.release();
    }catch(error){
        console.log('Unable to connect to the database', error);
        throw error;
    }
}


// initialize database tables
const initDatabase = async() => {
    try {
    const connection = await pool.getConnection();
    
    // Create users table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id VARCHAR(50) PRIMARY KEY,
        username VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    // Create todos table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS todos (
        id VARCHAR(50) PRIMARY KEY,
        user_id VARCHAR(50) NOT NULL,
        title VARCHAR(255) NOT NULL,
        completed BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      )
    `);

    console.log('Database tables initialized successfully.');
    connection.release();
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
}



module.exports = { pool, testConnection, initDatabase };