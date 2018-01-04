let app           = require('./config/express')();
let rotasProdutos = require("./app/routes/produtos")(app);

app.listen(3000,()=>{
    console.log("servidor rodando");
});

//    res.send("<html><body><h1>Lista de produtos</h1></body></html>");