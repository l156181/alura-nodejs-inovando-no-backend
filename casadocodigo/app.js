var express = require('express');
var app = express();

app.get('/produtos',(req,res)=>{
    res.send("<html><body><h1>Lista de produtos</h1></body></html>");
});

app.listen(3000,()=>{
    console.log("servidor rodando");
});