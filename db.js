const {knex} = require('knex');
const {knexConfig} = require('./knexfile');

const database = knex(knexConfig);

export default database;
