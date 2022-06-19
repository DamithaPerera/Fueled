const {Client} = require('pg')
require('dotenv').config();


const dbConnection = new Client({
    // ssl: false,
    user: 'postgres',
    host: '127.0.0.1',
    database: 'fueled',
    password: '123',
    port: 5432,
})
// DATABASE_URL=postgres://postgres:123@127.0.0.1:5432/fueled
// dbConnection.connect();

// module.exports = {
//     query: (text, params) => dbConnection.query(text, params),
// }
console.log('DB connected')

module.exports = dbConnection;
