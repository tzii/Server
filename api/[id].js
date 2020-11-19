export const hi = (req, res) => {
    res.json({
        msg: req.query.id,
    });
};
