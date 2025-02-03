import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const connectToDatabase = async () => {

    try {
        const connection = await mysql.createConnection({

            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });
        console.log("Database connected successfully");
        return connection;

    }
    catch (err) {
        console.log("Error connecting to database: ", err);
        process.exit(1);
    }
};

export default connectToDatabase;