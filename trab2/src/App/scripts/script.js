const https = require("https");
const axios = require("axios");
const path = require("path");
const fs = require("fs");

let vm = new Vue({
    el: "#elem",
    data: {
      nome: null,
      idade: null,
      peso: null,
      altura: null,
      baseURL: "https://localhost:9443",
    },
    created: function () {},
    methods: {
      Descobrir: async function () {
        const data = {
          nome: this.nome,
          idade: this.idade,
          peso: this.peso,
          altura: this.altura,
        };
        console.log(data);
        try {
            const httpsAgent = new https.Agent({
            // rejectUnauthorized: false, // (NOTE: this will disable client verification)
            cert: fs.readFileSync(
              path.resolve(__dirname, "../../../Keys/public-cert.pem")
            ),
            key: fs.readFileSync(
              path.resolve(__dirname, "../../../Keys/private-key.pem")
            ),
          });

          const response = await axios.post(this.baseURL + "/flamengo", {
            data, httpsAgent
          });
          return response;
        } catch (error) {
          console.log("deu ruim ", error);
        }
      },
    },
  });