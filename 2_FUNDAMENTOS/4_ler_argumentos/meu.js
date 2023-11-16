console.log(process.argv);

var arg = process.argv.slice(2);

console.log(arg)

const nome = arg[0].split('=')[1]

console.log (nome)