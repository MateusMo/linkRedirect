const { User } = require('../models');
const bcrypt = require('bcrypt');

const post = async (req, res) => {
    const { nickName, password } = req.body;
    try {
        const user = await User.findOne({
            where: {
                nickName: nickName
            }
        });

        if (user) {
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (passwordMatch) {
                //salva usuário na sessão
                req.session.user = user.dataValues;
                return res.status(200).render('home',  { user: req.session.user });
            } else {
                return res.status(401).render('login', { errorMessage: 'Senha incorreta' });
            }
        } else {
            return res.status(401).render('login', { errorMessage: 'Usuário não encontrado' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro interno do servidor' });
    }
}

const get = async(req,res)=>{
    res.render('login')
}



module.exports = { post, get };
