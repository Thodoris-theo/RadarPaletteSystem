module.exports.authMiddleware = function(req, res, next) {
    if (!req.session.user) {
        return res.status(403).send('Unauthorized access');
    }
    next();
};
