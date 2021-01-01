const dotenv = require('dotenv');

dotenv.config({
    path: 'gampp.conf',
});

module.exports = {
    port: parseInt(process.env.APP_PORT || 8000),
}