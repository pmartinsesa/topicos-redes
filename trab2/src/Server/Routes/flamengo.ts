import { FLAMENGO_PLAYERS } from "../Database/flamengoPlayer";

export const flamengoRoutes = (app: any) => {
  app.get("/", (_ : any, res: any) => {
    return res.send("Trabalho 2 de Tópicos Avançados em Redes");
  });

  app.get("/flamengo", (_: any, res: any) => {
    const players = FLAMENGO_PLAYERS;
    return res.send(players);
  });
};
