const express = require('express');
const registerRouter = require('./routes/registerRouter');
const loginRouter = require('./routes/loginRouter');
const logoutRouter = require('./routes/logoutrouter');
const homeRouter = require('./routes/homeRouter');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const sqlDetector = require('./utils/sqlDetector');
const session = require('express-session');
const ddosDetector = require('./utils/ddosDetector');
const app = express();
const port = 3000;

//Configuração Handlebars
app.set('view engine', 'hbs');
app.engine('hbs', handlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'main',
}));

//criar secretKey no servidor
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

//Verificação de ataques
app.use(sqlDetector);
app.use(ddosDetector);

//rotas
app.use('/home', homeRouter)
app.use('/registro', registerRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);

//rota 404 padrão
app.use((req, res, next) => {
    res.render('error',{user: req.session, message:'Página não encontrada', status:'404'});
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});



