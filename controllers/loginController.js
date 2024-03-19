
const post = async(req,res)=>{
    const {nickName,password} = req.body;
    try {
        const response = {nickName:nickName,password:password};
        return res.status(201).json(response);
    } catch {
        res.status(500).json({ error: 'Internal server error' });
    }
}

const get = async(req,res)=>{
    res.render('login')
}



module.exports = { post, get };
