import { FLAMENGO_PLAYERS } from "../Database/flamengoPlayer";

export const flamengoRoutes = (app: any) => {
  app.get("/", (_: any, res: any) => {
    return res.send("Trabalho 2 de Tópicos Avançados em Redes");
  });

  app.post("/flamengo", (req: any, res: any) => {
    console.log(req);
    const body = req.body;
    console.log(req.body)

    const choosePlayer = getPlayerIndex(body);
    
    const player = FLAMENGO_PLAYERS[choosePlayer];

    console.log(player);
    return res.send(player);
  });
};

const getPlayerIndex = (body: any) => {
  const bodyLength =
    body.nome.length +
    body.idade.length +
    body.peso.length +
    body.altura.length;

  return bodyLength % FLAMENGO_PLAYERS.length;
};
