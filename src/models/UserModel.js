import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    activeChannels: [String],

    favoriteChannels: [String]
});

module.exports = mongoose.model('User', userSchema);