import { colors } from "./util/Colors";
import leia from "readline-sync";

export function main() {
    let opcao: number;

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
                    "\n\nAdicionar Produto\n\n",
                    colors.reset
                );
                keyPress();
                break;
            case 2:
                console.log(
                    colors.fg.whitestrong,
                    "\n\nListar todos os Produtos\n\n",
                    colors.reset
                );
                keyPress();
                break;
            case 3:
                console.log(
                    colors.fg.whitestrong,
                    "\n\nBuscar Produto por Nome\n\n",
                    colors.reset
                );
                keyPress();
                break;
            case 4:
                console.log(
                    colors.fg.whitestrong,
                    "\n\nAtualizar Produto\n\n",
                    colors.reset
                );
                keyPress();
                break;
            case 5:
                console.log(
                    colors.fg.whitestrong,
                    "\n\nApagar Produto\n\n",
                    colors.reset
                );
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
