const get = (req, res) => {
    req.session.destroy((errorMessage)   => {
        if (errorMessage) {
            return res.status(500).json({ errorMessage });
        }

        res.redirect('/login');
    });
};

module.exports = { get }