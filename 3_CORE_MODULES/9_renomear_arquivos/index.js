const fs = require('fs');

fs.rename("arquivo.txt", "NovoArquivo.txt", function(err){
    if(err){
        console.log(err)
    }
    console.log("Arquivo renomeado!");

})