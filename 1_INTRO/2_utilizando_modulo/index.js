const fs = require('fs'); // file syste,

fs.readFile('arquivo.txt', 'utf8', (err, data)=>{

    if(err){
        console.log(err);
    }
    console.log(data);

})