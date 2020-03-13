require('dotenv').config();


const pgp = require('pg-promise')({
    query: function (e) {
        console.log('QUERY:', e.query)
    }
});
const option = {
    host: 'drona.db.elephantsql.com',
    database: 'ikzimdgt',
    user: 'ikzimdgt',
    password: 'lXCgQ2jwppOvyFyNs9cLEIK5r_3iVWa8'
};
const db = pgp(option);

module.exports = db;