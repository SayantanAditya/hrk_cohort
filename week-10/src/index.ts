// Import the pg Client
import { Client } from 'pg';

// Create a new Client instance with the connection string
const client = new Client({
  connectionString: "postgresql://SayantanAditya:82LeqrMSKdgF@ep-morning-scene-a5vgwdj3.us-east-2.aws.neon.tech/neondb?sslmode=require"
});

// Function to create the users table
async function createUsersTable() {
  try {
    // Connect to the database
    await client.connect();

    // Create the users table
    const result = await client.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log('Users table created:', result);
  } catch (err) {
    console.error('Error creating users table:', err);
  } finally {
    // Close the database connection
    await client.end();
  }
}

// Function to insert a user into the users table
async function insertUsersTable() {
  try {
    // Connect to the database
   await client.connect();

    // Insert a user into the users table
    const result = await client.query(`
      INSERT INTO users (username, email, password)
      VALUES ('dev', 'dev@gmail.com', 'dev1234')
    `);

    console.log('User inserted:', result);
  } catch (err) {
    console.error('Error inserting user:', err);
  } finally {
    // Close the database connection
    await client.end();
  }
}

// Call the functions
//createUsersTable();
insertUsersTable();