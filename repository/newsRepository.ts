import mongoose from "mongoose";
import { News } from "../models/news";

const NewsSchema = new mongoose.Schema<News>({
  titulo: { type: String },
  chapeu: { type: String },
  texto: { type: String },
  autor: { type: String },
  imagem: { type: String },
  dataPublicacao: { type: Date }, 
  tags: { type: String },
  link: { type: String },
  ativo: { type: Boolean }
});

export const NewsRepository = mongoose.model<News>("news", NewsSchema);