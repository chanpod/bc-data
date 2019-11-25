module.exports = {
    username: String,
    email: String,
    firstName: String,
    password: { type: String, select: false },
    salt: { type: String, select: false },
    lastName: String,
    createdOn: Date,
    updatedOn: Date,
    scopes: [String],
    clients: [String]
};
