import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import Logger from "./lib/Logger";
import connectDB from "./db/config";
import llmRouter from "./routes/llm";

require('dotenv').config();

const PORT = process.env.PORT;
if (!PORT)
    throw new Error('No PORT specified');

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

connectDB();

app.get('/is-alive', (_, res) => {
    return res.json({
        message: 'Server is alive',
        serverTime: new Date()
    })
});


app.use('/llm', llmRouter);

app.listen(PORT, async () => {
    Logger.success(`Server started on port ${PORT}`);
    Logger.info(`http://localhost:${PORT}`);
});
