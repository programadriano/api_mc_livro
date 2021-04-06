import { Core } from "./core";
import { Fotos } from "./fotos";

/**
 * Model de galeria de fotos
 * @type fotos {Array} lista da model de fotos
 */
export class Galeria extends Core {
    fotos: Array<Fotos>;
}