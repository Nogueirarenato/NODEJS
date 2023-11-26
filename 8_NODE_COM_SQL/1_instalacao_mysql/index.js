const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const port = 8080;


const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));


app.get('/', (req, res)=>{
    res.render('home');
})


const conn = mysql.createConnection({
    hots: 'localhost',
    user: 'root',
    password: 'banana',
    database: 'cursonode'
})

app.listen(port, ()=>{`App rodando na porta ${port}`});

conn.connect((err)=>{
    if(err){
        console.log(err)
    }
    console.log("conectado ao banco de dados...")
})