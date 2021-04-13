const express = require('express');
const path = require('path');
const puerto = process.env.PORT
const app = express();
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('home');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register');

});
app.listen(puerto || 3030, function() {
    console.log("Servidor corriendo en el puerto 3030");
});