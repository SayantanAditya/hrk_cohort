"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the pg Client
const pg_1 = require("pg");
// Create a new Client instance with the connection string
const client = new pg_1.Client({
    connectionString: "postgresql://SayantanAditya:82LeqrMSKdgF@ep-morning-scene-a5vgwdj3.us-east-2.aws.neon.tech/neondb?sslmode=require"
});
// Function to create the users table
function createUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Connect to the database
            yield client.connect();
            // Create the users table
            const result = yield client.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);
            console.log('Users table created:', result);
        }
        catch (err) {
            console.error('Error creating users table:', err);
        }
        finally {
            // Close the database connection
            yield client.end();
        }
    });
}
// Function to insert a user into the users table
function insertUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Connect to the database
            yield client.connect();
            // Insert a user into the users table
            const result = yield client.query(`
      INSERT INTO users (username, email, password)
      VALUES ('dev', 'dev@gmail.com', 'dev1234')
    `);
            console.log('User inserted:', result);
        }
        catch (err) {
            console.error('Error inserting user:', err);
        }
        finally {
            // Close the database connection
            yield client.end();
        }
    });
}
// Call the functions
//createUsersTable();
insertUsersTable();
