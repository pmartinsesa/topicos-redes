const tls = require("tls");
const fs = require("fs");
const https = require("https");
const axios = require("axios");
const asciify = require("asciify-image");
const readline = require("readline");
const waitForUserInput = require('wait-for-user-input')

const imageOptions = {
  fit: "box",
  width: 50,
  height: 50,
};

const bhImage = fs.readFileSync("./tls-cer/Images/fodase.png");
const gabigolImage = fs.readFileSync("./tls-cer/Images/gabigol.jpg");
const arrascaImage = fs.readFileSync("./tls-cer/Images/arraxca.jpg");
const imperadorImage = fs.readFileSync("./tls-cer/Images/imperador.jpg");
const obinaImage = fs.readFileSync("./tls-cer/Images/obina.png");

const options = {
  key: fs.readFileSync("./tls-cer/server-key.pem"),
  cert: fs.readFileSync("./tls-cer/server-crt.pem"),
  ca: fs.readFileSync("./tls-cer/ca-crt.pem"),
  host: "localhost",
  port: 9443,
  rejectUnauthorized: true,
  requestCert: true,
};

async function readStdin() {
  let data = {
    name: '',
    age: '',
    weight: '',
    height: ''
  }

  const nameInput = await waitForUserInput('Digite seu nome ', '\n')
  data.name = nameInput;
  const ageInput = await waitForUserInput('Digite sua idade ', '\n')
  data.age = ageInput;
  const weightInput = await waitForUserInput('Digite seu peso ', '\n')
  data.weight = weightInput;
  const heightInput = await waitForUserInput('Digite sua altura ', '\n')
  data.height = heightInput;
  return data;  
}

async function sendMessage() {
  const httpsAgent = new https.Agent(options);
  console.log("======================================");
  console.log("INICIANDO TRANSMISSÃO");
  console.log("======================================");
  let data = await readStdin()
  try {
    return await axios.post("https://localhost:9443/flamengo", data, {
      httpsAgent,
    });
  } catch (error) {
    // console.log(error);
    console.log("DEU ERRO");
  }
}

sendMessage().then((res) => {
  let image = ''
  player = res.data
  if(player.name == 'Bruno Henrique')
      image = bhImage
  if(player.name == 'De Arrascaeta')
      image = arrascaImage
  if(player.name == 'Gabriel Barbosa (Gabigol)')
      image = gabigolImage
  if(player.name == 'Adriano Imperador')
      image = imperadorImage
  if(player.name == 'Obina')
      image = obinaImage

  console.log("======================================");
  console.log("PARABÉNS VOCÊ É O", player.name );
  console.log("======================================");
  
  asciify(image, imageOptions, function (err, asciified) {
          if (err) throw err;
          // Print to console
          console.log(asciified);
        });
});


