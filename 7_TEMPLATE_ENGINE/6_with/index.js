const express = require('express');
const exphdbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphdbs.engine());

app.set('view engine', 'handlebars');


app.get('/dashboard', (req, res) => {
    const items = ['item a', 'item b', 'item c'];
    res.render('dashboard', { items })
})

app.get("/post", (req, res) => {
    post = {
        title: "Aprender Node.js",
        category: "Javascript",
        body: "Este artigo vai te ajudar a aprender nodeJs...",
        comments: 4
    }

    res.render('blogpost', {post})


})

app.get('/', (req, res) => {



    const user = {
        name: "Renato",
        surname: "Nogueira"
    }


    const auth = true;
    res.render('home', { user: user, auth })

})


const port = 8080


app.listen(port, () => { console.log(`Servidor rodando na porta ${port}`) });