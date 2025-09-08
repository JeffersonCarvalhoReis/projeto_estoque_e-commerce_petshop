import { Produto } from "./Produto";

export class Acessorio extends Produto {
    private _tamanho: string;
    private _material: string;

    constructor(nome: string, preco: number, quantidade: number, descricao: string, tamanho: string, material: string) {
        super(nome, preco, quantidade, descricao);
        this._tamanho = tamanho;
        this._material = material;
    }
    public get tamanho(): string {
        return this._tamanho;
    }
    public set tamanho(tamanho: string) {
        this._tamanho = tamanho;
    }
    public get material(): string {
        return this._material;
    }
    public visualizar(): void {
        super.visualizar();
        console.log(
            `
            Tamanho: ${this._tamanho}
            Material: ${this._material}
            ********************************************************
            `
        )
    }
}