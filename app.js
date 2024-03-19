const express = require('express');
const registerRouter = require('./routes/registerRouter');
const loginRouter = require('./routes/loginRouter');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

app.set('view engine', 'hbs');
app.engine('hbs', handlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'main',
}));
app.use(express.static('public'));
// Declaração de rotas
//utilizar essas rotas no futuro
//com o handlebars
app.use('/registro', registerRouter);
app.use('/', loginRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



