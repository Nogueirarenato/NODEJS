const http = require('http');
const fs = require('fs');
const port = 8080;

const server = http.createServer((req, res) => {

const urlInfo =require('url').parse(req.url, true)
const name = urlInfo.query.name


if(!name){
    fs.readFile('mensagem.html', function(err, data){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(data)
        return res.end();
    })


  

}
else{
    const nameNewLine = name +'\n\r'
    fs.appendFile('arquivo.txt', nameNewLine, function(err,data){
        res.writeHead(302,{
            Location : '/'
        })
    return res.end();
    })
}  



  

})


server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})