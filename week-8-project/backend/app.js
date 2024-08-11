import express from "express";
import cors from "cors";
import { createRequire } from "module";
import dotenv from "dotenv";
import crypto from 'crypto'

import { dbConnection } from "./database/dbConnection.js"
import { errorMiddleWare } from "./error/error.js"
import reservationRoute from "./routes/reservationRoute.js"

const app = express();
// const path = require("path");

const require = createRequire(import.meta.url);
const path = require('path')

dotenv.config({path: "./config/config.env"});

app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ["POST"],
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api/v1/reservation", reservationRoute)

app.get("/" , (req, res) => {
    app.use(express.static(path.resolve(_dirname, "mern-frontend", "dist")));
    res.sendFile(path.resolve(_dirname, "mern-frontend", "dist", "index.html"));
});

dbConnection();

app.use(errorMiddleWare);

export default app;