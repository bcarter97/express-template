import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import tmp from "tmp";

import { StatusRouter } from "../api/routes/status/status.route";
import { LOG_LEVEL } from "../constants/common.constants";

export const app = express();

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// Use compression
app.use(compression());

// Use helmet
app.use(helmet());

// Use CORS
app.use(cors());

// Use Morgan
app.use(morgan(LOG_LEVEL));

// Define our default router for "/"
app.use("/", StatusRouter);

tmp.setGracefulCleanup();
