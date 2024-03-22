'use strict'

const get = async ({ session: { user } },res)=>{
    res.render('home', { user });
}

module.exports = { get };
