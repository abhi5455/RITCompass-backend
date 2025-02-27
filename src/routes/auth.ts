import {Router} from "express";
import HTTP_status from "../lib/HTTP_status";
import User from "../db/models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const authRouter = Router();



const SECRET_KEY = "test_jwt_id"//process.env.JWT_KEY;

if (!SECRET_KEY) {
    console.error('No SECRET_KEY specified in env file');
    process.exit(1);
}

authRouter.post('/login', async (req, res) => {
    const {email, password} = req.body;

    if (!email || !password) {
        return res.status(HTTP_status.BAD_REQUEST).json({
            success: false,
            message: !email && !password ? "Email and password are required" : !password ? "Password required" : "Email required"
        })
    }

    try {
        const user = await User.findOne({email});
        if (!user) return res.status(400).json({message: "Invalid credentials"});

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({message: "Invalid credentials"});

        const token = jwt.sign({id: user._id}, SECRET_KEY, {expiresIn: "10h"});

        res.json({
            success: true,
            token,
            user: {
                id: user._id,
                username: user.name,
                email: user.email
            }
        });
    } catch (e) {
        return res.status(HTTP_status.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error logging in"
        })
    }

});

authRouter.post('/signup', async (req, res) => {
    const {name, email, password} = req.body;

    if (!name || !email || !password) {
        return res.status(HTTP_status.BAD_REQUEST).json({
            success: false,
            message: !name && !email && !password ? "Name, Email, and password are required" : !email ? "Email required" : !password ? "Password required" : "User Name required"
        })
    }
    try {
        const existingUser = await User.findOne({email});
        if (existingUser)
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name, email, password: hashedPassword
        });

        await user.save();

        return res.json({
            success: true,
            message: "User created successfully"
        })
    } catch (e) {
        console.error(e);
        return res.status(HTTP_status.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error creating user"
        })
    }
});

export default authRouter;