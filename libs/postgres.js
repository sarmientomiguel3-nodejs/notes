const {Client} = require('pg');

async function getConnection() {
    const client = new Client({
        host: 'localhost',
        port: 5004,
        user: 'admin',
        password: 'admin',
        database: 'notes'
    });
    await client.connect();
    return client;
}

module.exports = getConnection;