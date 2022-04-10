import cors from "cors"

export const authorizationsMiddleware = (app : any) => {
    app.use(cors())

    app.use(function(_: any, res: any, next : any) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");
      
        next();
      });
}