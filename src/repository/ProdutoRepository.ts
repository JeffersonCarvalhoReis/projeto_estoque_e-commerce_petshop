import { Produto } from "../model/Produto";

export interface ProdutoRepository {
    procurarPorNome(nome: string): void;
    listarTodas(): void;
    cadastrar(conta: Produto): void;
    atualizar(conta: Produto): void;
    deletar(nome: string): void;
}