module.exports = (req, res) => {
    res.json({
        msg: req.query,
    });
};
