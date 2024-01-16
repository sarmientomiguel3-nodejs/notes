const { Pool } = require('pg');
const {config} = require('./../config/config');
const { connectionString } = require('pg/lib/defaults');
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

//const pool = new Pool({
    //host: 'localhost',
    //port: 5004,
    //user: 'admin',
    //password: 'admin',
    //database: 'notes'
//});

const pool = new Pool({connectionString: URI});

module.exports = pool;