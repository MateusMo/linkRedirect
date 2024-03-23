const express = require('express');
const registerRouter = require('./routes/registerRouter');
const loginRouter = require('./routes/loginRouter');
const homeRouter = require('./routes/homeRouter');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
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
//essa chave secreta deve ser variável de ambiente
//no servidor
const secretKey = '12345';
app.use(session({
    secret: secretKey, // Chave secreta para assinar a sessão
    resave: false,
    saveUninitialized: true
  }));

  //Configuração bodyParser
app.use(bodyParser.urlencoded({ extended: true }));

//Configuração css publico
app.use(express.static('public'));

//rotas
app.use('/home', homeRouter)
app.use('/registro', registerRouter);
app.use('/', loginRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});



