export const flamengoRoutes = (app: any) => {
  app.get("/", (_ : any, res: any) => {
    return res.send("Trabalho 2 de Tópicos Avançados em Redes");
  });

  app.get("/flamengo", (_: any, res: any) => {
    return res.send(`<h1>Uma vez Flamengo, sempre Flamengo
          Flamengo sempre eu hei de ser
          É o meu maior prazer vê-lo brilhar
          Seja na terra, seja no mar
          Vencer, vencer, vencer
          Uma vez Flamengo, Flamengo até morrer
          Na regata ele me mata, me maltrata
          Me arrebata, que emoção no coração
          Consagrado no gramado, sempre amado
          Mais cotado no Fla-Flu, é o ai Jesus
          Eu teria um desgosto profundo
          Se faltasse o Flamengo no mundo
          Ele vibra, ele é fibra, muita libra, já pesou
          Flamengo até morrer, eu sou
          Uma vez Flamengo, sempre Flamengo
          Flamengo sempre eu hei de ser
          É o meu maior prazer vê-lo brilhar
          Seja na terra, seja no mar
          Vencer, vencer, vencer
          Uma vez Flamengo, Flamengo até morrer
          Na regata ele me mata, me maltrata
          Me arrebata, que emoção no coração
          Consagrado no gramado, sempre amado
          Mais cotado no Fla-Flu, é o ai Jesus
          Eu teria um desgosto profundo
          Se faltasse o Flamengo no mundo
          Ele vibra, ele é fibra, muita libra, já pesou
          Flamengo até morrer, eu sou</h1>`);
  });
};
