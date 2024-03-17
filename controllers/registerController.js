'use strict';

const { User } = require('../models');

const post = async (req, res) => {
  const { nickName, password } = req.body;
  try {
    console.log(nickName)
    console.log(password)

    const newUser = await User.create({
      nickName: nickName,
      password: password
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { post };
