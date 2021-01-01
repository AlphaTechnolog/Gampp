const dotenv = require('dotenv');

// load the enviroment variables from the `./gampp.conf` file.
dotenv.config({
    path: 'gampp.conf',
});

module.exports = {
    port: parseInt(process.env.APP_PORT) || 8000,
}