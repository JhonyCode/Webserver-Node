const express = require('express')
const app = express()
const hbs = require('hbs');
require('dotenv').config();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//servir Contenido estático
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.render('home', {
        nombre: 'Juanito Valderrama'
    })
    });  
app.get('/generic', (req,res) => {
    res.render('generic', {
        nombre: 'Juanito Valderrama'
    })
    });
  
app.get('/elements', (req,res) => {
    res.render('elements', {
        nombre: 'Juanito Valderrama'
    })
    });
app.get('*', (req,res) => {
    res.sendFile(__dirname + '/public/404.html')
    });

app.listen(port,()=>  {
    console.log(`Example app listening at http://localhost:${port}`);
})