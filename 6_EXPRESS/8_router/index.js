const express = require("express");
const app = express();
const usersRouters = require('./users');
port = 8080;

const path = require("path");

const basePath = path.join(__dirname, "templates")


//lendo o body

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(
    express.json()
)

app.use('/users', usersRouters)



app.get("/", (req, res) => {

    res.sendFile(`${basePath}/index.html`);
});







app.listen(port, () => { console.log(`Servidor rodando na porta ${port}`) });


