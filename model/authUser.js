var mongoose = require('mongoose'),
    modelName = 'user',
    schemaDefinition = require('../schema/' + modelName);

var schemaInstance = mongoose.Schema(schemaDefinition);

schemaInstance.add({
    password: String,
    salt: String
})
var modelInstance = mongoose.model("authUser", schemaInstance, 'user');

module.exports = modelInstance;
