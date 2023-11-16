const minimist = require('minimist');


//módulo externo
const args = minimist(process.argv.slice(2))

console.log(args);

//módulo interno