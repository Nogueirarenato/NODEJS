const chalk = require('chalk');

const nota = 6.9;



if (nota >= 7) {
    console.log(chalk.green.bold('Parabéns você foi aprovado!!'));
}
else {
    console.log(chalk.bgRed('Você foi reprovado, otário!!'));
}