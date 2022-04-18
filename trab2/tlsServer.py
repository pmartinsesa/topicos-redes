import ssl
from socket import *

HOSTNAME = 'www.python.org'
IP = '127.0.0.1'
PORT = 4444
ADDRESS = (IP, PORT)

def main():
    server = socket(AF_INET, SOCK_STREAM)
    server.bind(ADDRESS)
    server.listen(2)
    
    print("Rodando...")    
    while True:
        obj, addr = server.accept()
        serverSsl = ssl.wrap_socket(
            obj,
            server_side=True,
            certfile="./tls-cer/server-crt.pem",
            keyfile="./tls-cer/server-key.pem",
        )
        try:
            while serverSsl:
                message = serverSsl.read()
                data = obj.recv(1024)
                print (data);
                if message:
                    print(message)
                else:
                    print("Peguei foi nada")
        except Exception as ex:
            serverSsl.close()
            obj.close()

main();