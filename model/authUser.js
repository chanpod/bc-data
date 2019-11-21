var mongoose = require('mongoose'),
    modelName = 'authUser',
    schemaDefinition = require('../schema/' + modelName),
    schemaInstance = mongoose.Schema(schemaDefinition, { collection: 'users' }),
    modelInstance = mongoose.model(modelName, schemaInstance);

module.exports = modelInstance;
