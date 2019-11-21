const mongoose = require('mongoose');

module.exports = {
    client: require('./model/client.js'),
    token: require('./model/token.js'),
    user: require('./model/user')
}