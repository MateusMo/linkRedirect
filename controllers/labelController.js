'use strict'

const { Label, Destination } = require("../models");

const post = async (req, res) => {
    const { id } = req.session.user;
    const { labelName, link } = req.body;
    
    if (!id) res.status(404).render('home');

    try {
        const { id: labelId } = await Label.
            create({ userId: id, label: labelName });
            
        await Destination.create({ labelId, link });

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
