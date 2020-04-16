const router = require('express').Router();
let User = require('../models/UserModel');

router.route('/add').post((req, res) => {
    const {forename, surname, age, email, password, team} = req.body;
    const user = new User({forename, surname, age, email, password, team});

    user.save()
        .then((result) => res.status(201).json({success: true, message: 'user added...'}))
        .catch(err => res.json({success: false, message: 'Something went wrong'}))
});

module.exports = router;