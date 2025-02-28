import express from "express";
require('dotenv').config();

import bodyParser from "body-parser";
import cors from "cors";
import Logger from "./lib/Logger";
import connectDB from "./db/config";
import llmRouter from "./routes/llm";
import authRouter from "./routes/auth";
import letterRouter from "./routes/letter";


const PORT = process.env.PORT;
if (!PORT)
    throw new Error('No PORT specified');

const app = express();
app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

connectDB();

app.get('/is-alive', (_, res) => {
    console.log("Request is-alive")
    return res.json({
        message: 'Server is alive',
        serverTime: new Date()
    })
});

app.use('/llm', llmRouter);
app.use('/auth', authRouter);
app.use('/letter', letterRouter);

app.listen(PORT, async () => {
    Logger.success(`Server started on port ${PORT}`);
    Logger.info(`http://localhost:${PORT}`);
});
