import { FLAMENGO_PLAYERS } from "../Database/flamengoPlayer";

export const flamengoRoutes = (app: any) => {
  app.get("/", (_: any, res: any) => {
    return res.send("Trabalho 2 de Tópicos Avançados em Redes");
  });

  app.post("/flamengo", (req: any, res: any) => {
    const body = req.body;
    const choosePlayer = getPlayerIndex(body);
    const player = FLAMENGO_PLAYERS[choosePlayer];
    return res.send(player);
  });
};

const getPlayerIndex = (body: any) => {
  const bodyLength =
    body.name.length +
    body.age.length +
    body.weight.length +
    body.height.length;

  return bodyLength % FLAMENGO_PLAYERS.length;
};
