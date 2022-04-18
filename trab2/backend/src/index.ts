import fs from "fs";
import path from "path";

import https from "https";
import express from "express";

import { flamengoRoutes } from "./Routes/flamengo";
import { authorizationsMiddleware } from "./Middlewares/authorization";
import {
  CA_CERT_PATH,
  HOST,
  KEY_PATH,
  PORT,
  SERVER_CERT_PATH,
} from "./constants";

/**
 * Add middlewares and the api routes
 */
const configApi = () => {
  const app = express();

  authorizationsMiddleware(app);
  flamengoRoutes(app);

  return app;
};

/**
 * Creates https config and listening the PORT
 */
const runServer = () => {
  const app = configApi();

  const options = {
    key: fs.readFileSync(path.join(__dirname, KEY_PATH)),
    cert: fs.readFileSync(path.join(__dirname, SERVER_CERT_PATH)),
    ca: fs.readFileSync(path.join(__dirname, CA_CERT_PATH)),
    host: HOST,
    port: PORT,
    rejectUnauthorized: true,
    requestCert: true,
  };

  https.createServer(options, app).listen(PORT);

  console.log("Running");
};

runServer();
