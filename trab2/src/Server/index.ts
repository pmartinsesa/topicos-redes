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
          path.resolve(__dirname, "../../Keys/public-cert.pem")
        ),
        key: fs.readFileSync(
          path.resolve(__dirname, "../../Keys/private-key.pem")
        ),
        requestCert: false,
        rejectUnauthorized: false,
      },
      app
    )
    .listen(9443);
};

runServer();
