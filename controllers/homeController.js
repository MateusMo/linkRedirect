'use strict';
const { Label, Destination } = require("../models");

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

        res.render('home', { user, labels });
    } catch (error) {
        console.error("Erro ao buscar Labels e Destinations", error);
        res.status(500).send("Ocorreu um erro ao buscar as informações");
    }
};

module.exports = { get };
