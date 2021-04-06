import mongoose from "mongoose";
import { Podcast } from "../models/podcast";

const PodcastSchema = new mongoose.Schema<Podcast>({
    titulo: { String },
    texto: { String },
    imagem: { String },
    duracao: { String },
    link: { String },
    url: { String },
    dataPublicacao: { Date },
    tags: { String },
    ativo: { Boolean }
});

export const PodcastRepository = mongoose.model<Podcast>("podcasts", PodcastSchema);