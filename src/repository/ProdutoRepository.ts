import { Produto } from "../model/Produto";

export interface ProdutoRepository {
    procurarPorNome(nome: string): void;
    listarTodos(): void;
    cadastrar(produto: Produto): void;
    atualizar(produto: Produto): void;
    deletar(nome: string): void;
}