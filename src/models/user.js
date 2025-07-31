// ✅ Final version of models/user.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        collection: 'users'
    }
);

// 👇 yahan model ka naam User rakho
const User = mongoose.model('user', userSchema);

module.exports = User;
