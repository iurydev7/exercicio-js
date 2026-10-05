const readline = require("readline-sync");

// ========================================
// SISTEMA DE ALUNOS
// ========================================

let alunos = [];

let executando = true;

while (executando) {

    console.log("\n==============================");
    console.log("      SISTEMA DE ALUNOS");
    console.log("==============================");
    console.log("1 - Cadastrar aluno");
    console.log("2 - Listar alunos");
    console.log("3 - Consultar aluno");
    console.log("4 - Ver situação dos alunos");
    console.log("5 - Sair");
    console.log("==============================");

    let opcao = readline.question("Escolha uma opcao: ");

    switch (opcao) {

        // --------------------------------
        // CADASTRAR
        // --------------------------------
        case "1":

            console.log("\n--- CADASTRO DE ALUNO ---");

            let nome = readline.question("Nome: ");
            let idade = Number(readline.question("Idade: "));
            let nota = Number(readline.question("Nota: "));
            
            console.log("\nUsuário cadastrado com sucesso!");
            // TODO:
            // Verificar se a nota está entre 0 e 10
            if(nota < 0 || nota > 10) {
                console.log("Nota Inválida ! Digite uma nota entre 0 e 10.");
                break;

            }
            // TODO:
            // Criar um objeto aluno
            let aluno = {
                nome: nome,
                idade: idade,
                nota: nota
            };

            // TODO:
            // Adicionar o aluno ao array
            alunos.push(aluno);
            break;


        // --------------------------------
        // LISTAR
        // --------------------------------
        case "2":

            console.log("\n--- ALUNOS CADASTRADOS ---");

            // TODO:
            // Verificar se existem alunos cadastrados
            if (alunos.length === 0) {
                console.log("Nenhum aluno cadastrado.");
                break;
            } else {
                console.log(`Total de alunos cadastrados: ${alunos.length}`);
            }

            // TODO:
            // Percorrer o array utilizando FOR
            for (let i = 0; i < alunos.length; i++) {
                let aluno = alunos[i];
                console.log(`
                    --------------------
                    Nome: ${aluno.nome}
                    Idade: ${aluno.idade}
                    Nota: ${aluno.nota}
                    --------------------`);
            }

            // Mostrar:
            // Nome
            // Idade
            // Nota
            
            break;


        // --------------------------------
        // CONSULTAR
        // --------------------------------
        case "3":

            console.log("\n--- CONSULTAR ALUNO ---");

            let nomeBusca = readline.question("Digite o nome: ");

            let alunoEncontrado = false;

            // TODO:
            // Percorrer o array procurando
            // pelo nome informado.
            for (let i = 0; i < alunos.length; i++) {
                let aluno = alunos[i];
                if (aluno.nome === nomeBusca) {
                    console.log(`
                        Nome: ${aluno.nome}
                        Idade: ${aluno.idade}
                        Nota: ${aluno.nota}
                        --------------------`);
                    alunoEncontrado = true;
                    break;
                }
            }

            // Se encontrar:
            // - Mostrar os dados
            // - Alterar alunoEncontrado para true
            // - Utilizar BREAK


            if (!alunoEncontrado) {
                console.log("Aluno nao encontrado.");
            }

            break;


        // --------------------------------
        // SITUAÇÃO
        // --------------------------------
        case "4":

            console.log("\n--- SITUACAO DOS ALUNOS ---");

            // TODO:
            // Percorrer todos os alunos
            for (let i = 0; i < alunos.length; i++) {
                let aluno = alunos[i];
                console.log(`
                    Nome: ${aluno.nome}
                    Idade: ${aluno.idade}
                    Nota: ${aluno.nota}
                    --------------------`);
                if (aluno.nota >= 7) {
                    console.log("Situação: Aprovado");
                } else if (aluno.nota >= 5) {
                    console.log("Situação: Recuperação");
                } else {
                    console.log("Situação: Reprovado");
                }
                console.log("--------------------");
            }

            break;
            

        // --------------------------------
        // SAIR
        // --------------------------------
        case "5":

            console.log("\nSistema encerrado!");

            executando = false;

            break;


        // --------------------------------
        // OPÇÃO INVÁLIDA
        // --------------------------------
        default:

            console.log("\nOpcao invalida!");

            break;
    }
}
