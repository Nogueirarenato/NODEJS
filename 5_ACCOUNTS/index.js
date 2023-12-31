//módulos externos
const inquirer = require('inquirer');
const chalk = require('chalk');

//módulos internos
const fs = require('fs');

console.log("ACCOUNTS INICIADO!")
operation();




function operation() {
    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'O que você desejea fazer?',
        choices: [
            'Criar Conta',
            'Consultar Saldo',
            'Depositar',
            'Sacar',
            'Sair'
        ]
    }]).then(
        (answer) => {
            const action = answer['action'];
            if (action === "Criar Conta") createAccount();
            else if (action === 'Consultar Saldo') { getAccountBalance() }
            else if (action === "Depositar") { deposit() }
            else if (action === 'Sacar') { withdraw() }
            else if (action === "Sair") {
                console.log(chalk.bgBlue.black('Obrigado por usar o Accounts!'))
                process.exit()
            }

        }


    ).catch();
}


//create account 

function createAccount() {
    console.log(chalk.bgGreen.black("Parabéns por escolher o nosso banco!"));
    console.log(chalk.green("Defina as opções da sua conta a seguir..."));
    buildAccount();
}

function buildAccount() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Digite um nome para sua conta:'
        }
    ])
        .then((answer) => {
            const accountName = answer['accountName'];
            console.info(accountName);
            if (!fs.existsSync('accounts')) { fs.mkdirSync('accounts') }
            if (fs.existsSync(`accounts/${accountName}.json`)) {
                console.log(
                    chalk.bgRed.black('Esta conta já existe, escolha outro nome!')
                )
                buildAccount();
                return

            }
            fs.writeFileSync(
                `accounts/${accountName}.json`, '{"balance": 0}', function (err) { console.log(err) }
            )
            console.log(chalk.green(`Parabéns a conta ${accountName} foi criada com sucesso!!`))
            operation();
        })
        .catch((err) => { console.log(err) })
}


//deposito
function deposit() {
    inquirer.prompt(
        [
            {
                name: 'accountName',
                message: 'Qual o nome da sua conta?'
            }
        ]
    )
        .then((answer) => {
            const accountName = answer['accountName'];

            //verificando se o usuário existe
            if (!checkAccount(accountName)) {
                return deposit();
            }

            inquirer.prompt([
                {
                    name: 'amount',
                    message: 'Quanto você deseja depositar?'
                }
            ]).then(
                (answer) => {
                    const amount = answer['amount']

                    //add an amount
                    addAmount(accountName, amount)
                    operation()

                }
            ).catch((err) => { console.log(err) })




        })
        .catch((err) => { console.log(err) })

}


function checkAccount(accountName) {
    if (!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed.black(`A conta ${accountName} não existe...`))
        return false;
    }
    return true;
}

function addAmount(accountName, amount) {

    const accountData = getAccount(accountName);
    if (!amount) {
        console.log(chalk.bgRed.black("Ocorreu um erro... sorry..."));
        return deposit();
    }
    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance);
    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function (err) {
            console.log(err);
        }
    )
    console.log(chalk.bgGreen.black(`Foi depositado o valor de R$${amount} na sua conta.`))

}

function getAccount(accountName) {
    const accountJson = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf8',
        flag: 'r'
    });
    return JSON.parse(accountJson);

}

//Consulta Saldo

function getAccountBalance() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: "Qual o nome da sua conta?"
        }
    ])
        .then(
            (answer) => {
                const accountName = answer['accountName']

                //verificando se a conta existe
                if (!checkAccount(accountName))
                    return getAccountBalance()
                const accountData = getAccount(accountName);
                console.log(chalk.bgBlue.black(
                    `Olá! O saldo da sua conta é de R$${accountData.balance}`
                ))
                operation();
            }

        )
        .catch((err) => { console.log(err) })

}

//Saque

function withdraw() {

    inquirer.prompt([{
        name: "accountName",
        message: "Qual o nome da sua conta?"
    }])
        .then(
            (answer) => {
                const accountName = answer['accountName']
                if (!checkAccount(accountName))
                    return withdraw();
                inquirer.prompt([{
                    name: 'amount',
                    message: 'Qual valor você deseja sacar?'
                }])
                    .then(
                        (answer) => {
                            const amount = answer['amount'];
                            removeAmount(accountName, amount);
                            operation();
                        }
                    )
                    .catch(err => console.log(err))
            }


        )
        .catch((err) => { console.log(err) })

}

function removeAmount(accountName, amount){
    const accountData = getAccount(accountName);
    if (!amount) {
        console.log(chalk.bgRed.black("Aconteceu um erro, tente novamente..."))
        
    }

    if (accountData.balance < amount) {
        console.log(chalk.bgRed.black("Seu pobre, você não tem esse valor em conta... vaza daqui caraio..."))
        
    }
    else {
        accountData.balance = parseFloat(accountData.balance) - parseFloat(amount);
        fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(accountData))
        console.log(chalk.bgGreen.black(`O valor de R$${amount} foi debitado de sua conta, agora seu saldo é de R$${accountData.balance}`))
        
    }

}