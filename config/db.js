const {Client} = require('pg')
require('dotenv').config()


const dbConnection = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
})

dbConnection.connect();

module.exports = {
    query: (text, params) => dbConnection.query(text, params),
}
