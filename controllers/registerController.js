'use strict';

const { User } = require('../models');
const bcrypt = require('bcrypt');

const post = async (req, res) => {
  const { nickName, password, profilePicture } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10); 
    const newUser = await User.create({
      nickName: nickName,
      password: hashedPassword,
      profilePicture: profilePicture
    });

    res.status(201).render('login', { successMessage: 'Token criado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const get = async (req, res) => {
  res.render('registro')
}


module.exports = { post, get };
