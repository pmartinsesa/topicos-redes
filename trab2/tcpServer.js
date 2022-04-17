const net = require("net");
const NodeRSA = require("node-rsa");
const fs = require("fs");
const path = require("path");

const port = 9443;
const host = "localhost";

const server = net.createServer();
server.listen(port, host, () => {
  console.log("TCP Server is running on port " + port + ".");
});

let sockets = [];

server.on("connection", function (sock) {
    let privateKey =  fs.readFileSync("./tls-cer/server-key.pem");
    let keyPrivate = new NodeRSA(privateKey)

  console.log("CONNECTED: " + sock.remoteAddress + ":" + sock.remotePort);
  sockets.push(sock);

  sock.on("data", function (data) {
    console.log("DATA " + sock.remoteAddress + ": " + data.toString('base64'));
    console.log("DATA " + sock.remoteAddress + ": " + data.toString('base64').length);
    // const decrypted_message = keyPrivate.decrypt(data, 'utf-8');
    // console.log("DATA Decripto" + sock.remoteAddress + ": " + decrypted_message);
    // Write the data back to all the connected, the client will receive it as data from the server
    sockets.forEach(function (sock, index, array) {
      sock.write(
        sock.remoteAddress + ":" + sock.remotePort + " said " + data + "\n"
      );
    });
  });

  // Add a 'close' event handler to this instance of socket
  sock.on("close", function (data) {
    let index = sockets.findIndex(function (o) {
      return (
        o.remoteAddress === sock.remoteAddress &&
        o.remotePort === sock.remotePort
      );
    });
    if (index !== -1) sockets.splice(index, 1);
    console.log("CLOSED: " + sock.remoteAddress + " " + sock.remotePort);
  });
});
