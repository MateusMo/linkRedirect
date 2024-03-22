'use strict'

const { Label } = require("../models");

const post = async (req, res) => {
    const { id } = req.session.user;
    const { labelName } = req.body;
    console.log(req.session.user);

    try {
        if (!id) res.status(404).render('home');

        await Label.create({ userId: id, label: labelName });

        res.status(201).render('label',
            { successMessage: 'Label criada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

const get = async (_req,res)=>{
    res.render('label');
}

module.exports = { post, get };
