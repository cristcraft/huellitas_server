const { response } = require('express');
const express = require('express');
const app = express();
const dbCards = require('./db.json');

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headres", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get('/', (req,res)=>{
    res.send('<h1>Mi primer servidor</h1>');
});

app.get('/src/images/index/', (req, res) =>{
    res.sendFile( `publicidadCarusel2.jpeg` );
})

app.get('/images', (req, res) =>{
    res.send(
        {'images': [{publicidad: 'http://localhost:3001/src/images/index?1', precio:'$5000' },{id: 1 , titulo: 'Comida gato', precio:'$6000' }]}
    );
})

app.get('/cards', (req, res) =>{
    res.send(dbCards);
})



app.listen(3001, ()=>{
    console.log('servidor encendido');
});