const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: { type: String,
    minlength:[3,"Author name should be at least 3 characters long"] }

}, { timestamps: true });
module.exports.Author = mongoose.model('Author', AuthorSchema);
