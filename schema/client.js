module.exports = {
	id: String,
	clientId: {type: String, required: true},
	clientSecret: {type: String, required: true},
	grants: [String],
    redirectUris: [String],
    scopes: [String]
};
