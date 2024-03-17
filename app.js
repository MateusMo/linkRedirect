const express = require('express');
const bodyParser = require('body-parser');
const registerRouter = require('./routes/registerRouter')
const loginRouter = require('./routes/loginRouter')

const app = express();
const port = 4000;

//declaração de pacotes de dependência
app.use(bodyParser.json());

//declaração de rotas
app.use('/register',registerRouter);
app.use('/login',loginRouter);

app.listen(port);

