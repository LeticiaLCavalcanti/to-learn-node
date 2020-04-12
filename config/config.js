const env = process.env.NODE_ENV || 'dev';

const config = () => {
    switch (env) {
        case 'dev':
        return {
            bd_string: 'mongodb+srv://----@@cluster0-kb8zz.mongodb.net/test?retryWrites=true&w=majority',
            jwt_pass: '13dnms',
            jwt_expires_in: '7d',

        };
        case 'mlg':
        return {
            bd_string: 'mongodb+srv://----@@cluster0-kb8zz.mongodb.net/test?retryWrites=true&w=majority'
            jwt_pass: '13dnms',
            jwt_expires_in: '7d',
        };
        case 'prod':
        return {
            bd_string: 'mongodb+srv://----@@cluster0-kb8zz.mongodb.net/test?retryWrites=true&w=majority'
            jwt_pass: '13dnms',
            jwt_expires_in: '7d',
        }
    }
};

console.log(`Iniciando  a API em ambiente ${env.toUpperCase()}`);

module.exports = config();