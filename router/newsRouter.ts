import "reflect-metadata";
import express, { Request, Response } from "express";
import { container } from "tsyringe";
import { NewsController } from "../controller/newsController";

const newsRouter = express();
const news = container.resolve(NewsController);

newsRouter.route("/api/v1/news/:page/:qtd").get((req: Request, res: Response) => {
    return news.get(req, res);
});


newsRouter.route("/api/v1/news/:id").get((req: Request, res: Response) => {
    return news.getById(req, res);
});

export default newsRouter;