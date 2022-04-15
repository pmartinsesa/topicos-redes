const axios = require('axios')
const https = require("https");
const path = require("path");
const fs = require("fs");
const { createNoSubstitutionTemplateLiteral } = require('typescript');

const httpsAgent = new https.Agent({
    rejectUnauthorized: true, // (NOTE: this will disable client verification)
    cert: fs.readFileSync(
        path.resolve(__dirname, "../../../Keys/public-cert.pem")
      ),
    key: fs.readFileSync(
        path.resolve(__dirname, "../../../Keys/private-key.pem")
      ),
    passphrase: "YYY"
  })
  const data = {
    nome: 'test',
    idade: 'test',
    peso: 'test',
    altura: 'test',
   
};
  async function teste() {
    try {
      const response = await axios.get('https://localhost:9443/', {httpsAgent});
    //   const response = await axios.post('https://localhost:9443/flamengo', {data, httpsAgent});
      console.log(response);
    } catch (error) {
        console.log('DEU ERRO')
    //   console.error(error);
    }
  }

teste()
module.exports = {
    httpsAgent,
  };