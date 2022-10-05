const  { Client }  = require('pg')

const databaseConfig = new Client({
    host: 'localhost',
    user: 'postgres',
    database: 'adriel_backend_2',
    port: 5432,
    password: 'ba4c3l9na'
})

module.exports = databaseConfig