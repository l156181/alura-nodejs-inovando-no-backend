var http = require('http');
var port = 3000;
var ip = "localhost";

var server = http.createServer((req,res)=>{
    console.log("receive request");
    res.writeHead(200,{'Content-Type':"text/html"})
    res.end(("<html><body><h1>Listando Produtos</h1></body></html>"))
});

// server.listen(3000); 
server.listen(port,ip);
console.log("Servidor Rodando");  