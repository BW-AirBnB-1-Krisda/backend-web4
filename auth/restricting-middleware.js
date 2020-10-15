const jwt = require('jsonwebtoken');
const secrets = require('../secrets/secrets.js');

module.exports = (req, res, next) => {
    const [authType, token] = req.headers.authorization.split(' ');
    if(token) {
        jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({you: 'may not have access (invalid token).'})
            } else {
                req.decodedJwt = decodedToken;
                next();
            }
        })
    } else {
        res.status(401).json({you: 'have no power (no token included).'})
    }
}