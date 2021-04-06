import { Podcast } from "../models/podcast";
import { IService } from "./iService";

/**
 * Contrato IPodcastService
 * @summary esse contrato implementa a interface IService passando a model de Podcast
 */
export interface IPodcastService extends IService<Podcast> { }