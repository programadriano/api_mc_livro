import "reflect-metadata";
import express, { Request, Response } from "express";
import { container } from "tsyringe";
import { PodcastController } from "../controller/podcastController";

const podcastRouter = express();
const podcast = container.resolve(PodcastController);

podcastRouter.route("/api/v1/podcast/:page/:qtd").get((req: Request, res: Response) => {
    return podcast.get(req, res);
});

podcastRouter.route("/api/v1/podcast/:id").get((req: Request, res: Response) => {
    return podcast.getById(req, res);
});

export default podcastRouter;