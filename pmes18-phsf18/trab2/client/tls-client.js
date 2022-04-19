const fs = require("fs");
const https = require("https");

const axios = require("axios");
const NodeRSA = require("node-rsa");
const waitForUserInput = require("wait-for-user-input");

const asciify = require("asciify-image");

const imageOptions = {
  fit: "box",
  width: 50,
  height: 50,
};
const options = {
  key: fs.readFileSync("../keys/server-key.pem"),
  cert: fs.readFileSync("../keys/server-crt.pem"),
  ca: fs.readFileSync("../keys/ca-crt.pem"),
  host: "localhost",
  port: 9443,
  rejectUnauthorized: true,
  requestCert: true,
};

const bhImage = fs.readFileSync("./Images/bruno.png");
const gabigolImage = fs.readFileSync("./Images/gabigol.jpg");
const arrascaImage = fs.readFileSync("./Images/arraxca.jpg");
const imperadorImage = fs.readFileSync("./Images/imperador.jpg");
const obinaImage = fs.readFileSync("./Images/obina.png");

const privateKey = new NodeRSA(options.key.toString());

/**
 * Read the user input
 */
async function readStdin(sabotagem = '') {
  let data = {
    name: "",
    age: "",
    weight: "",
    height: "",
  };

  const nameInput = await waitForUserInput("Digite seu nome ", "\n") + sabotagem;
  data.name = nameInput;
  const ageInput = await waitForUserInput("Digite sua idade ", "\n") + sabotagem;
  data.age = ageInput;
  const weightInput = await waitForUserInput("Digite seu peso ", "\n") + sabotagem;
  data.weight = weightInput;
  const heightInput = await waitForUserInput("Digite sua altura ", "\n") + sabotagem;
  data.height = heightInput;
  return data;
}

/**
 * Send Message
 */
async function sendMessage() {
  const httpsAgent = new https.Agent(options);
  console.log("======================================");
  console.log("INICIANDO TRANSMISSÃO");
  console.log("======================================");
  let data = await readStdin("sabotagem");
  const dataEncrypted = privateKey.encrypt(data, "base64");

  console.log("\n");
  console.log("======================================");
  console.log("Mensagem enviada do lado do cliente");
  console.log("======================================");
  console.log("Cifrada:", dataEncrypted);
  console.log("Original:", data);
  console.log("======================================");
  console.log("Mensagem enviada do lado do cliente");
  console.log("======================================");
  try {
    return await axios.post("https://localhost:9443/flamengo", dataEncrypted, {
      httpsAgent,
    });
  } catch (error) {
    console.log("Error");
  }
}

async function main() {
  while (true) {
    res = await sendMessage();
    let image = "";
    encryptedPlayer = res.data;
    const playerDecrypted = privateKey.decrypt(encryptedPlayer, "utf8");
    let player = JSON.parse(playerDecrypted);

    console.log("\n");
    console.log("======================================");
    console.log("Mensagem recebida do lado do cliente");
    console.log("======================================");
    console.log("Cifrada:", encryptedPlayer);
    console.log("Original:", player);
    console.log("======================================");
    console.log("Mensagem recebida do lado do cliente");
    console.log("======================================");

    if (player.name == "Bruno Henrique") image = bhImage;
    if (player.name == "De Arrascaeta") image = arrascaImage;
    if (player.name == "Gabriel Barbosa (Gabigol)") image = gabigolImage;
    if (player.name == "Adriano Imperador") image = imperadorImage;
    if (player.name == "Obina") image = obinaImage;

    console.log("======================================");
    console.log("PARABÉNS VOCÊ É O", player.name);
    console.log("======================================");

    asciified = await asciify(image, imageOptions);

    console.log(asciified)

    console.log("\n");
    console.log("======================================");
    console.log("Fim da transmissão cliente");
    console.log("======================================");
  }
}

main();
