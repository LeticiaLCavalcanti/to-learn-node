const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

router.get('/', auth, (req, res) => {
    console.log(res.locals.auth_data);
    return res.send({ message: 'tudo ok com o GET da raiz'});
});

router.post('/', (req, res) => {
    return res.send({ message: 'tudo ok com o POST da raiz'});
});

module.exports = router;