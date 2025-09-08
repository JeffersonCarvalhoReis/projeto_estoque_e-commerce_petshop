import { Acessorio } from "../model/Acessorio";
import { Alimento } from "../model/Alimento";
import { Medicamento } from "../model/Medicamento";
import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";
import { colors } from "../util/Colors";

export class ProdutoController implements ProdutoRepository {
    private estoqueProdutos: Array<Produto> = new Array<Produto>();

    constructor() {
        const produt1: Produto = new Alimento(
            "Ração Premium Cães",
            150.0,
            50,
            "Ração balanceada para cães de todas as idades",
            "Frango",
            "Médio e Grande"
        );
        const produt2: Produto = new Medicamento(
            "Antipulgas e Carrapatos",
            80.0,
            30,
            "Medicamento para prevenção e tratamento de pulgas e carrapatos em cães e gatos",
            "Fipronil",
            "Cães e Gatos"
        );

        const produt3: Produto = new Acessorio(
            "Coleira Anti-pulgas",
            40.0,
            100,
            "Coleira repelente de pulgas e carrapatos",
            "Médio",
            "Nylon"
        );
        this.estoqueProdutos.push(produt2);
        this.estoqueProdutos.push(produt3);
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
    listarTodos(): void {
        for (const produto of this.estoqueProdutos) {
            produto.visualizar();
        }
    }
    cadastrar(produto: Produto): void {
        this.estoqueProdutos.push(produto);
        console.log(
            colors.fg.green,
            `\nO produto ${produto.nome} foi criada com sucesso!`,
            colors.reset
        );
    }
    atualizar(produto: Produto): void {
        const buscaProduto = this.buscarNoEstoque(produto.nome);
        if (buscaProduto) {
            this.estoqueProdutos[this.estoqueProdutos.indexOf(buscaProduto)] =
                produto;
            console.log(
                colors.fg.green,
                `\nO produto ${produto.nome} foi atualizado com sucesso!`,
                colors.reset
            );
        } else {
            console.log(
                colors.fg.red,
                `\nO produto ${produto.nome} não foi encontrado!`,
                colors.reset
            );
        }
    }
    deletar(nome: string): void {
        const buscaProduto = this.buscarNoEstoque(nome);
        if (buscaProduto) {
            this.estoqueProdutos.splice(
                this.estoqueProdutos.indexOf(buscaProduto),
                1
            );
            console.log(
                colors.fg.green,
                `\nO produto ${nome} foi removido com sucesso!`,
                colors.reset
            );
        } else {
            console.log(
                colors.fg.red,
                `\nO produto ${nome} não foi encontrado!`,
                colors.reset
            );
        }
    }
    private normalizarTexto(texto: string): string {
        return texto
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();
    }
    buscarNoEstoque(nome: string): Produto | null {
        const nomeNormalizado = this.normalizarTexto(nome);
        const produto = this.estoqueProdutos.find((produto) =>
            this.normalizarTexto(produto.nome).includes(nomeNormalizado)
        );
        if (produto) {
            return produto;
        }
        return null;
    }
}
