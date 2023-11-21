const express = require("express");
const app = express();

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

// app.get('/users/:id', (req,res)=>{

//     const id = req.params.id;
//     res.sendFile(`${basePath}/index.html`);
//     console.log(`Estamos procurando pelo usuário ${id}`);



// });

app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`);
})

app.post('/users/save', (req, res) => {
    console.log(req.body);

    name = req.body.name;
    age = req.body.age;
    console.log(`O nome do usuário é ${name} e ele tem ${age} anos`)

});

app.get("/", (req, res) => {

    res.sendFile(`${basePath}/index.html`);
});







app.listen(port, () => { console.log(`Servidor rodando na porta ${port}`) });


