import { ProdutoController } from "./controller/ProdutoController";
import { Acessorio } from "./model/Acessorio";
import { Alimento } from "./model/Alimento";
import { Medicamento } from "./model/Medicamento";
import { colors } from "./util/Colors";
import leia from "readline-sync";

export function main() {
    const produtos: ProdutoController = new ProdutoController();
    let nome,
        tipo,
        descricao,
        tamanho,
        material,
        sabor,
        principioAtivo,
        indicacao: string;
    let opcao, preco, quantidade: number;
    const porteAnimal: string[] = ["Pequeno", "Medio", "Grande"];
    const tiposProdutos: string[] = ["Medicamento", "Alimento", "Acessorio"];

    while (true) {
        console.log(
            colors.bg.black,
            colors.fg.bluestrong,
            `
        **************************************************************

                           🐕 PATINHAS FELIZES PETSHOP 🐈

        **************************************************************
                        1 - Adicionar Produto
                        2 - Listar todos os Produtos
                        3 - Buscar Produto por Nome
                        4 - Atualizar Produto
                        5 - Apagar Produto
                        6 - Sair
                        
        **************************************************************

        Entre com a opção desejada: 
        `,
            colors.reset
        );

        opcao = leia.questionInt("");

        if (opcao === 6) {
            console.log(
                colors.fg.greenstrong,
                "\nPatinhas Felizes Petshop Agradece a sua visita! Volte Sempre! 🐕🐈\n"
            );
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(
                    colors.fg.whitestrong,
                    "\n\nAdicionar Novo Produto\n\n",
                    colors.reset
                );
                console.log("Escolha o tipo do produto: ");
                tipo =
                    leia.keyInSelect(tiposProdutos, "", { cancel: false }) + 1;

                console.log("Digite o nome do produto: ");
                nome = leia.question("");

                console.log("Digite a descrição do produto: ");
                descricao = leia.question("");

                let valido = false;
                do {
                    try {
                        console.log("Digite o preço do produto: ");
                        preco = leia.questionFloat("");
                        if (preco < 0) {
                            throw new Error("O preço não pode ser negativo");
                        }
                        valido = true;
                    } catch (error: any) {
                        console.log(error.message);
                    }
                } while (!valido);

                console.log("Digite a quantidade do produto: ");
                quantidade = leia.questionInt("");

                switch (tipo) {
                    case 1:
                        console.log(
                            "Digite o princípio ativo do medicamento: "
                        );
                        principioAtivo = leia.question("");

                        console.log("Digite a indicação do medicamento: ");
                        indicacao = leia.question("");

                        produtos.cadastrar(
                            new Medicamento(
                                nome,
                                preco!,
                                quantidade,
                                descricao,
                                principioAtivo,
                                indicacao
                            )
                        );
                        break;
                    case 2:
                        console.log("Digite o sabor do alimento: ");
                        sabor = leia.question("");

                        console.log("Escolha o porte do animal: ");
                        const indicePorte = leia.keyInSelect(porteAnimal, "", {
                            cancel: false,
                        });

                        produtos.cadastrar(
                            new Alimento(
                                nome,
                                preco!,
                                quantidade,
                                descricao,
                                sabor,
                                porteAnimal[indicePorte]!
                            )
                        );
                        break;
                    case 3:
                        console.log(
                            "Digite o tamanho do acessório (Pequeno, Médio, Grande): "
                        );
                        tamanho = leia.question("");

                        console.log("Digite o material do acessório: ");
                        material = leia.question("");

                        produtos.cadastrar(
                            new Acessorio(
                                nome,
                                preco!,
                                quantidade,
                                descricao,
                                tamanho,
                                material
                            )
                        );

                        break;
                }
                keyPress();
                break;
            case 2:
                console.log(
                    colors.fg.whitestrong,
                    "\n\nListar todos os Produtos\n\n",
                    colors.reset
                );

                produtos.listarTodos();
                keyPress();
                break;
            case 3:
                console.log(
                    colors.fg.whitestrong,
                    "\n\nBuscar Produto por Nome\n\n",
                    colors.reset
                );
                console.log("Digite o nome do produto: ");
                nome = leia.question("");
                produtos.procurarPorNome(nome);
                keyPress();
                break;
            case 4:
                console.log(
                    colors.fg.whitestrong,
                    "\n\nAtualizar Produto\n\n",
                    colors.reset
                );
                console.log("Digite o nome do produto: ");
                nome = leia.question("");

                const produto = produtos.buscarNoEstoque(nome);
                if (produto) {
                    console.log(
                        `Digite o novo nome do produto (${produto.nome}): `
                    );
                    nome = leia.question("");

                    console.log(
                        `Digite a nova descrição do produto (${produto.descricao}):`
                    );
                    descricao = leia.question("");

                    let valido = false;
                    do {
                        try {
                            console.log(
                                `Digite o novo preço do produto (R$${produto.preco.toFixed(
                                    2
                                )}): `
                            );
                            preco = leia.questionFloat("");
                            if (preco < 0) {
                                throw new Error(
                                    "O preço não pode ser negativo"
                                );
                            }
                            valido = true;
                        } catch (error: any) {
                            console.log(error.message);
                        }
                    } while (!valido);

                    console.log(
                        `Digite a nova quantidade do produto (${produto.quantidade}): `
                    );
                    quantidade = leia.questionInt("");

                    tipo = produto.tipo;

                    switch (tipo) {
                        case 1:
                            console.log(
                                `Digite o novo princípio ativo do medicamento: `
                            );
                            principioAtivo = leia.question("");

                            console.log("Digite a indicação do medicamento: ");
                            indicacao = leia.question("");

                            produtos.atualizar(
                                produto,
                                new Medicamento(
                                    nome,
                                    preco!,
                                    quantidade,
                                    descricao,
                                    principioAtivo,
                                    indicacao
                                )
                            );
                            break;
                        case 2:
                            console.log(`Digite o novo sabor do alimento: `);
                            sabor = leia.question("");

                            console.log(`Escolha o novo porte do animal: `);
                            const indicePorte = leia.keyInSelect(
                                porteAnimal,
                                "",
                                {
                                    cancel: false,
                                }
                            );

                            produtos.atualizar(
                                produto,
                                new Alimento(
                                    nome,
                                    preco!,
                                    quantidade,
                                    descricao,
                                    sabor,
                                    porteAnimal[indicePorte]!
                                )
                            );
                            break;
                        case 3:
                            console.log(
                                `Digite o tamanho do acessório (Pequeno, Médio, Grande): `
                            );
                            tamanho = leia.question("");

                            console.log("Digite o material do acessório: ");
                            material = leia.question("");

                            produtos.atualizar(
                                produto,
                                new Acessorio(
                                    nome,
                                    preco!,
                                    quantidade,
                                    descricao,
                                    tamanho,
                                    material
                                )
                            );

                            break;
                    }
                } else {
                    console.log(
                        colors.fg.red,
                        "\nProduto não encontrado no estoque!\n",
                        colors.reset
                    );
                }
                keyPress();
                break;
            case 5:
                console.log(
                    colors.fg.whitestrong,
                    "\n\nApagar Produto\n\n",
                    colors.reset
                );
                console.log("Digite o nome do produto: ");
                nome = leia.question("");
                produtos.deletar(nome);

                keyPress();
                break;
            default:
                console.log(
                    colors.fg.red,
                    "\n\nOpção Inválida, tente novamente\n\n",
                    colors.reset
                );
                break;
        }
    }
}

function sobre(): void {
    console.log(
        `\n
        **************************************************************
        
        Projeto Desenvolvido por: Jefferson Carvalho
        Contato: jeffersoncarvalhodosreis@gmail.com
        GitHub: github.com/JeffersonCarvalhoReis

        **************************************************************
        `
    );
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    leia.prompt();
}

main();
