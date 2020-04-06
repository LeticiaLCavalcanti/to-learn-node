const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.send({ message: 'tudo ok com o GET da raiz'});
});

router.post('/', (req, res) => {
    return res.send({ message: 'tudo ok com o POST da raiz'});
});

module.exports = router;