import { Produto } from "./Produto";

export class Alimento extends Produto {
    private _sabor: string;
    private _porteAnimal: string;

    constructor(nome: string, preco: number, quantidade: number, descricao: string, sabor: string, porteAnimal: string) {
        super(nome, preco, quantidade, descricao, 2);
        this._sabor = sabor;
        this._porteAnimal = porteAnimal;
    }
    public get sabor(): string {
        return this._sabor;
    }
    public set sabor(sabor: string) {
        this._sabor = sabor;
    }
    public get porteAnimal(): string {
        return this._porteAnimal;
    }
    public set porteAnimal(porteAnimal: string) {
        this._porteAnimal = porteAnimal;
    }
    public visualizar(): void {
        super.visualizar();
        console.log(
           `
            Sabor: ${this._sabor}
            Porte do Animal: ${this._porteAnimal}
            ********************************************************
            `
        )
    }
}