const router = require('express').Router();

const restrict = require('../auth/restricting-middleware.js');

const Users = require('./users-model.js');

router.get('/', restrict, (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            res.status(500).json({message: 'The system could not retrieve the users.', error: err})
        })
})

module.exports = router;