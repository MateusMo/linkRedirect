'use strict';
const { Label, Destination } = require("../models");
const  tips  = require("../utils/tips")

const get = async (req, res) => {
    const { user } = req.session;

    if (!user) {
        return res.redirect('/login');
    }

    try {
        const labels = await Label.findAll({
            where: { userId: user.id },
            include: [{ model: Destination }],
        }).then(results => results.map(result => result.get({ plain: true })));
        res.render('home', { user, labels, tip: tips[Math.floor(Math.random() * 50) + 1]});
    } catch (error) {
        res.status(500).send("Ocorreu um erro ao buscar as informações");
    }
};

module.exports = { get };
