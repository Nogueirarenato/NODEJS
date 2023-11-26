const express = require('express');
const exphdbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphdbs.engine());

app.set('view engine', 'handlebars');


app.get('/', (req, res)=>{

    res.render('home')

})


const port = 8080


app.listen(port, ()=>{console.log(`Servidor rodando na porta ${port}`)});