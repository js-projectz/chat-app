import { Request, Response } from "express";
import connectToDatabase from "../config/db";

const createUser = async (req: Request, res: Response) => {

    const { username, email, password } = req.body;
    const connection = await connectToDatabase();

    try {
        const [result] = await connection.query(
            `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`,
            [username, email, password]
        );
        res.status(201).json({ message: "User created successfully" });
    }
    catch (err) {
        res.status(500).json({ message: "Error creating user" });
    }
    finally {
        connection.end();
    }
};

const getUser = async (req: Request, res: Response) => {

    const connection = await connectToDatabase();

    try {
        const [result] = await connection.query(
            `SELECT * FROM users`
        );
        res.status(200).json(result);
    }
    catch (err) {
        res.status(500).json({ message: "Error fetching users" });
    }
    finally {
        connection.end();
    }
};

export { createUser, getUser }; 