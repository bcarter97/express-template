import bodyParser from "body-parser";
import compression from "compression";
import express from "express";
import helmet from "helmet";

import "source-map-support/register";

const PORT = process.env.PORT || 8080;

// Create the expres server
const app = express();

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// Use compression
app.use(compression());

// Use helmet
app.use(helmet());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
