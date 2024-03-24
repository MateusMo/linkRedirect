const rateLimit = require('express-rate-limit');
const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 200, // Limite de 200 solicitações por IP dentro do intervalo de tempo especificado
    message: 'Muitas solicitações do mesmo IP, por favor, tente novamente mais tarde.'
});

function ddosDetector(req, res, next) {
    limiter(req, res, (err) => {
        if (err) {
            if (err instanceof Error && err.name === 'RateLimitExceeded') {
                // Se o limite de taxa foi excedido, renderize a página de erro personalizada
                fs.readFile(path.join(__dirname, 'views', 'errorPage.hbs'), 'utf8', (err, data) => {
                    if (err) {
                        return res.render('error', { user: req.session, message: 'Muitas solicitações por minuto', status: '401' });
                    }
                    return res.render('error', { user: req.session, message: 'Muitas solicitações por minuto', status: '401' });
                });
            } else {
                next(err);
            }
        } else {
            next();
        }
    });
}

module.exports = ddosDetector;
