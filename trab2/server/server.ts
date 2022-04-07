import https from "https";
import path from "path";
import fs from "fs";

import express from "express";
import { Request, Response } from "express";

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello, world!");
});

https
  .createServer(
    {
      cert: fs.readFileSync(path.resolve(__dirname, "../secrets/public-cert.pem")),
      key: fs.readFileSync(path.resolve(__dirname,"../secrets/private-key.pem")),
    },
    app
  )
  .listen(9443);
