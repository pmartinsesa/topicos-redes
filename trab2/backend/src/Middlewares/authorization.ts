import cors from "cors";
import express from "express";

/**
* Define the middlewares of the express app
* @param app The express application
*/ 
export const authorizationsMiddleware = (app: any) => {
  app.use(cors());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use(function (_: any, res: any, next: any) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    );

    next();
  });
};
