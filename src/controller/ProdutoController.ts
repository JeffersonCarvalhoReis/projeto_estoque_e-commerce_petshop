import { Alimento } from "../model/Alimento";
import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";
import { colors } from "../util/Colors";

export class ProdutoController implements ProdutoRepository {

    private estoqueProdutos: Array<Produto> = new Array<Produto>();

    produt1: Produto = new Alimento("Racao", 150.00, 50, "Ração balanceada para cães de todas as idades", "Frango", "Médio e Grande");
    
      constructor() {
        const produt1: Produto = new Alimento(
            "Racao",
            150.00,
            50,
            "Ração balanceada para cães de todas as idades",
            "Frango",
            "Médio e Grande"
        );

        this.estoqueProdutos.push(produt1);
    }

    procurarPorNome(nome: string): void {        
        const produto = this.buscarNoEstoque(nome);
        if (produto) {
            produto.visualizar();
        } else {
            console.log(
                colors.fg.red,
                `O produto ${nome} não foi encontrado!`,
                colors.reset
            );
        }
    }
    listarTodas(): void {
        throw new Error("Method not implemented.");
    }
    cadastrar(conta: Produto): void {
        throw new Error("Method not implemented.");
    }
    atualizar(conta: Produto): void {
        throw new Error("Method not implemented.");
    }
    deletar(nome: string): void {
        throw new Error("Method not implemented.");
    }

    buscarNoEstoque(nome: string): Produto | null {
        console.log(this.estoqueProdutos)
        const produto = this.estoqueProdutos.find(produto => produto.nome === nome);
        if (produto) {
            return produto;
        }
        return null;
    }
}