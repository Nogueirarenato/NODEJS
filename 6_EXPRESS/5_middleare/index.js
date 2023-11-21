const express = require("express");
const app = express();

port = 8080;

const path = require("path");

const basePath = path.join(__dirname, "templates")

const checkAuth = function (req, res, next) {
    req.autStatus = false;

    if(req.autStatus){
        console.log('Está Logado');
        next();
    }else{
        console.log('Não está logado, faça login.');
        next();
    }
}


app.use(checkAuth);

app.get("/", (req, res) => {

    res.sendFile(`${basePath}/index.html`);
})


app.listen(port, () => { console.log(`Servidor rodando na porta ${port}`) });


