//exercitar o express

const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send({
        mensagem:'Seja bem vindo! Consulte /pastas para informações de pasta'
    });
});
app.get('/pastas',(req, res)=> {
    res.send({
        mensagem:'Acabou a pasta!'
    });
});
app.post('/pastas',(req, res)=> {
    res.send({
        mensagem:'Recebi um post!'
    });
});

app.listen(3000,()=> console.log("Servidor inicializado!"));

