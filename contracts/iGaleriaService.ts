import { Galeria } from "../models/galeria";
import { IService } from "./iService";

 /**
  * Contrato IGaleriaService
  * @summary esse contrato implementa a interface IService passando a model de Galeria
  */
export interface IGaleriaService extends IService<Galeria> { }