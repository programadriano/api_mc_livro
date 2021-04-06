import { Videos } from "../models/videos";
import { IService } from "./iService";

/**
 * Contrato IVideosService
 * @summary esse contrato implementa a interface IService passando a model de Podcast
 */
export interface IVideosService extends IService<Videos> { }