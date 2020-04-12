const jwt = require('jsonwebtoken');


const auth = (req, res, next) => {
    const token_header = req.headers.auth;

    if(!token_header) return res.status(401).send({error: 'Token não enviado!'});

    jwt.verify(token_header, '13dnms', (err, decoded) => {
        if (err) return res.status(401).send({error: 'Toekn inválido'});
        res.locals.auth_data= decoded;
        return next();
    })
};

module.exports = auth;