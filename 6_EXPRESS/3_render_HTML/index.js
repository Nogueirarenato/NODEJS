const express = require ("express");
const app = express();

port = 8080;

const path = require("path");

const basePath = path.join(__dirname, "templates")




app.get("/", (req, res)=>{

    res.sendFile(`${basePath}/index.html`);
})


app.listen(port, ()=>{console.log(`Servidor rodando na porta ${port}`)});


