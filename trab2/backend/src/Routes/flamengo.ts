import fs from "fs";
import path from "path";

import { KEY_PATH } from "../constants";
import { FLAMENGO_PLAYERS } from "../Database/flamengoPlayer";

/**
 * Decrypted a message and return which player are you
 * @param app The express application
 */
export const flamengoRoutes = (app: any) => {
  app.post("/flamengo", (req: any, res: any) => {
    const NodeRSA = require("node-rsa");
    const RSAkey = fs.readFileSync(path.join(__dirname, "../" + KEY_PATH));
    const privateKey = new NodeRSA(RSAkey.toString());

    let requestBody = Object.keys(req.body)[0];
    while (requestBody != requestBody.replace(" ", "+"))
      requestBody = requestBody.replace(" ", "+");

    const bodyDecrypted = privateKey.decrypt(requestBody, "utf8");
    let bodyOriginal = JSON.parse(bodyDecrypted);

    console.log("\n");
    console.log("======================================");
    console.log("Mensagem recebida do lado do servidor");
    console.log("======================================");
    console.log("Cifrada:", requestBody);
    console.log("Original:", bodyOriginal);
    console.log("======================================");
    console.log("Mensagem recebida do lado do servidor");
    console.log("======================================");

    const choosePlayer = getPlayerIndex(bodyOriginal);
    const player = FLAMENGO_PLAYERS[choosePlayer];

    const encryptedPlayer = privateKey.encrypt(player, "base64");

    console.log("\n");
    console.log("======================================");
    console.log("Mensagem enviada do lado do servidor");
    console.log("======================================");
    console.log("Cifrada:", encryptedPlayer);
    console.log("Original:", player);
    console.log("======================================");
    console.log("Mensagem enviada do lado do servidor");
    console.log("======================================");
    
    console.log("\n");
    console.log("======================================");
    console.log("Fim da transmissão servidor");
    console.log("======================================");

    return res.send(encryptedPlayer);
  });
};

/**
 * Get the mod of the size of each attribute passed
 * @param body The body sent by the client side
 */
const getPlayerIndex = (body: any) => {
  const bodyLength =
    body.name.length +
    body.age.length +
    body.weight.length +
    body.height.length;

  return bodyLength % FLAMENGO_PLAYERS.length;
};
