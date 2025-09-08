import { Produto } from "./Produto";

export class Medicamento extends Produto {
    private _principioAtivo: string;
    private _indicacao: string;

    constructor(nome: string, preco: number, quantidade: number, descricao: string, principioAtivo: string, indicacao: string) {
        super(nome, preco, quantidade, descricao);
        this._principioAtivo = principioAtivo;
        this._indicacao = indicacao;
    }
    public get principioAtivo(): string {
        return this._principioAtivo;
    }
    public set principioAtivo(principioAtivo: string) {
        this._principioAtivo = principioAtivo;
    }
    public get indicacao(): string {
        return this._indicacao;
    }
    public set indicacao(indicacao: string) {
        this._indicacao = indicacao;
    }
    public visualizar(): void {
        super.visualizar();
        console.log(
            `
            Princípio Ativo: ${this._principioAtivo}
            Indicação: ${this._indicacao}
            ********************************************************
            `
        )
    }
}
