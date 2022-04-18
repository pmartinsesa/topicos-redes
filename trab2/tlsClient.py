import ssl
from socket import *

HOSTNAME = 'www.python.org'
IP = '127.0.0.1'
PORT = 4444
ADDRESS = (IP, PORT)

def main():
    sendedMessage = ssl.MemoryBIO()
    receivedMessage = ssl.MemoryBIO()

    sslContext = ssl.SSLContext()
    sslContext.load_cert_chain (
        certfile="./tls-cer/server-crt.pem",
        keyfile="./tls-cer/server-key.pem"
    )
    sslClient = sslContext.wrap_bio(receivedMessage, sendedMessage)

    client = socket(AF_INET, SOCK_STREAM)
    client.connect(ADDRESS)
    
    #handshake
    while True:
        try:
            sslClient.do_handshake()
            print("Handshake deu boa")
            break
        except ssl.SSLWantReadError:
            print("SSLWantReadError")
            data = sendedMessage.read()
            print(data)
            client.sendall(data)

            data = client.recv(1024)
            receivedMessage.write(data)


        except ssl.SSLWantWriteError:
            print("SSLWantWriteError")
            data = client.recv(1024)
            receivedMessage.write(data)
            data = sendedMessage.read()
            client.sendall(data)
         
    #envia um lixo (decubra)  
    data = sendedMessage.read()
    client.sendall(data)      
    #handshake

    #client
    while True:
        message = input("diga-me seu nome: ")
        if message:
            message = message.encode("utf-8");
            sslClient.write(message)
            criptoMessage = sendedMessage.read();
            # if len(data) == 0: continue;
            # client.sendall(message)
            print(criptoMessage);
    client.close();
    #client



main();