const express = require("express");
const app = express();

port = 8080;

const path = require("path");

const basePath = path.join(__dirname, "templates")

app.get('/users/:id', (req,res)=>{

    const id = req.params.id;
    res.sendFile(`${basePath}/index.html`);
    console.log(`Estamos procurando pelo usuário ${id}`);



})

app.get("/", (req, res) => {

    res.sendFile(`${basePath}/index.html`);
})


app.listen(port, () => { console.log(`Servidor rodando na porta ${port}`) });


