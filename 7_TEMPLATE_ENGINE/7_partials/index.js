const express = require('express');
const exphdbs = require('express-handlebars');

const app = express();

const hbs = exphdbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine);

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

    res.render('blogpost', { post })


})

app.get('/blog', (req, res) => {
    const posts = [
        {
            title: "Aprender Node.js",
            category: "Javascript",
            body: "Este artigo vai te ajudar a aprender nodeJs...",
            comments: 1
        },
        {
            title: "Aprender Node.js",
            category: "Javascript",
            body: "Este artigo vai te ajudar a aprender nodeJs...",
            comments: 2
        },
        {
            title: "Aprender Node.js",
            category: "Javascript",
            body: "Este artigo vai te ajudar a aprender nodeJs...",
            comments: 3
        },
        {
            title: "Aprender Node.js",
            category: "Javascript",
            body: "Este artigo vai te ajudar a aprender nodeJs...",
            comments: 4
        },
        {
            title: "Aprender Node.js",
            category: "Javascript",
            body: "Este artigo vai te ajudar a aprender nodeJs...",
            comments: 5
        },
    ]

    res.render('blog', {posts})
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