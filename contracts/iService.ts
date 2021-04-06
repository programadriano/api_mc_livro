import { Result } from "../infra/result";

/**
 * Interface genérica para retorno de pesquisas
 */
export interface IService<T> {
    /**
     * @summary busca por id
     * @param id {String} 
     * @returns retorna o resultado de uma busca pelo seu id
     */
    get(id: string): Promise<T>;
    /**
     * @summary Realiza uma busca paginada de uma model
     * @param page {number} pagina 
     * @param qtd  {Number} quantidade de intens
     * @returns retorna uma lista de T onde T é uma model
     */
    getAll(page: number, qtd: number): Promise<Result<T>>;
}