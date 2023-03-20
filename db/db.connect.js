const Pool = require("pg").Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ExpenseTracker',
    password: 'Jalpesh@1234',
    port: 5432,
})
exports.pool = pool;
