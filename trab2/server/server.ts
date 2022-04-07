import https from "https";
import path from "path";
import fs from "fs";

import express from "express";
import { Request, Response } from "express";

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello, world!");
});

app.get("/flamengo", (req, res) => {
  return res.send(`<h1>Uma vez Flamengo, sempre Flamengo
    Flamengo sempre eu hei de ser
    É o meu maior prazer vê-lo brilhar
    Seja na terra, seja no mar
    Vencer, vencer, vencer
    Uma vez Flamengo, Flamengo até morrer
    Na regata ele me mata, me maltrata
    Me arrebata, que emoção no coração
    Consagrado no gramado, sempre amado
    Mais cotado no Fla-Flu, é o ai Jesus
    Eu teria um desgosto profundo
    Se faltasse o Flamengo no mundo
    Ele vibra, ele é fibra, muita libra, já pesou
    Flamengo até morrer, eu sou
    Uma vez Flamengo, sempre Flamengo
    Flamengo sempre eu hei de ser
    É o meu maior prazer vê-lo brilhar
    Seja na terra, seja no mar
    Vencer, vencer, vencer
    Uma vez Flamengo, Flamengo até morrer
    Na regata ele me mata, me maltrata
    Me arrebata, que emoção no coração
    Consagrado no gramado, sempre amado
    Mais cotado no Fla-Flu, é o ai Jesus
    Eu teria um desgosto profundo
    Se faltasse o Flamengo no mundo
    Ele vibra, ele é fibra, muita libra, já pesou
    Flamengo até morrer, eu sou</h1>`);
});

https
  .createServer(
    {
      cert: fs.readFileSync(
        path.resolve(__dirname, "../secrets/public-cert.pem")
      ),
      key: fs.readFileSync(
        path.resolve(__dirname, "../secrets/private-key.pem")
      ),
    },
    app
  )
  .listen(9443);
