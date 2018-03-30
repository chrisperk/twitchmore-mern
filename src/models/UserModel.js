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

    activeChannels: [
        {
            channelName: String
        }
    ],

    favoriteChannels: [
        {
            channelName: String
        }
    ]
});

module.exports = mongoose.model('User', userSchema);