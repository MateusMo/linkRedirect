function detectSQLInjection(req, res, next) {
    const { query, body } = req;

    for (const key in query) {
        if (typeof query[key] === 'string' && query[key].match(/(select|drop|alter|truncate|delete|insert|update|create|grant|revoke|commit|rollback|shutdown)/i)) {
            return res.render('404');
        }
    }

    for (const key in body) {
        if (typeof body[key] === 'string' && body[key].match(/(select|drop|alter|truncate|delete|insert|update|create|grant|revoke|commit|rollback|shutdown)/i)) {
            return res.render('404');
        }
    }

    next();
}

module.exports = detectSQLInjection;