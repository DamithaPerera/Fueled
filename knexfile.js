require('dotenv').config();


const knexConfig = {
    client: 'pg',
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
    },
}


console.log('DB connected')
//
module.exports = knexConfig;
