import fs from "fs";
import path from "path";

import https from "https";
import express from "express";

import { authorizationsMiddleware } from "./Middlewares/authorization";
import { flamengoRoutes } from "./Routes/flamengo";

const configApi = () => {
  const app = express();

  authorizationsMiddleware(app);
  flamengoRoutes(app);
  
  return app;
}

const runServer = () => {
  const app = configApi();
  https
    .createServer(
      {
        cert: fs.readFileSync(
          path.resolve(__dirname, "./../tls-cer/server-crt.pem")
        ),
        key: fs.readFileSync(
          path.resolve(__dirname, "./../tls-cer/server-key.pem")
        ),
        ca: fs.readFileSync(
          path.resolve(__dirname, "./../tls-cer/ca-crt.pem")
        ),
        requestCert: true,
        rejectUnauthorized: true,
      },
      app
    )
    .listen(9443);
    console.log("SERVER RUNNING ON 9443")
};
runServer();
