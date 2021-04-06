import { Result } from "../infra/result";


export interface IService<T> {

    get(id: string): Promise<T>;

    getAll(page: number, qtd: number): Promise<Result<T>>;
}