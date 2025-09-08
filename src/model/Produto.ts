export abstract class Produto {    
    private _nome: string;
    private _preco: number;
    private _quantidade: number;
    private _descricao: string;
    private _tipo: number;

    constructor(nome: string, preco: number, quantidade: number, descricao: string, tipo: number) {
        this._nome = nome;
        this._preco = preco;
        this._quantidade = quantidade;
        this._descricao = descricao;
        this._tipo = tipo;
    }

    public get nome(): string {
        return this._nome;
    }
    public set nome(nome: string) {
        this._nome = nome;
    }
    public get preco(): number {
        return this._preco;
    }
    public set preco(preco: number) {
        this._preco = preco;
    }
    public get quantidade(): number {
        return this._quantidade;
    }
    public set quantidade(quantidade: number) {
        this._quantidade = quantidade;
    }
    public get descricao(): string {
        return this._descricao;
    }
    public set descricao(descricao: string) {
        this._descricao = descricao;
    }
    public get tipo(): number {
        return this._tipo;
    }
    public set tipo(tipo: number) {
        this._tipo = tipo;
    }

    public visualizar(): void {
        console.log(
            `
            ********************************************************
            Nome: ${this._nome}
            Preço: R$${this._preco.toFixed(2)}
            Quantidade em estoque: ${this._quantidade}
            Descrição: ${this._descricao}`
        )
    }
}