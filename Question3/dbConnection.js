const { Pool } = require('pg');

// Configure the PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DB_CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false, // Add this only if using self-signed certificates or testing with SSL disabled
  },
});

module.exports = pool;