var mongoose = require('mongoose'),
    modelName = 'user',
    userSchemaDefinition = require('../schema/' + modelName);


var authSchemaDefinition = {
    password: String,
    salt: String
};

var userSchema = mongoose.Schema({
    ...authSchemaDefinition,
    ...userSchemaDefinition
});

var modelInstance = mongoose.model("authUser", userSchema, 'users');

module.exports = modelInstance;
