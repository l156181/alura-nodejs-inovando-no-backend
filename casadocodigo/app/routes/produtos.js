let connectionFactory = require('../infra/connectionFactory');

module.exports = function (app){
    app.get('/produtos',(req,res)=>{
       let connection = connectionFactory();

        connection.query("select * from livros",(err,results)=>{
            res.render("produtos/lista",{lista:results});
            //res.send(results);
        });
        
        connection.end();

    });
}

