const express = require('express');
const registerRouter = require('./routes/registerRouter');
const loginRouter = require('./routes/loginRouter');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const port = 3000;

//Configuração Handlebars
app.set('view engine', 'hbs');
app.engine('hbs', handlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'main',
}));
//Configuração de sessão
//isso salva o usuário logado na sessão
//e distribui ele pelo sistema quando precisar
//exemplo de como salvar usuário e recuperar em
//login controller POST
app.use(session({
    secret: 'secreto', // Chave secreta para assinar a sessão
    resave: false,
    saveUninitialized: true
  }));
//Configuração bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
//Configuração css publico
app.use(express.static('public'));
//rotas
app.use('/registro', registerRouter);
app.use('/', loginRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});



