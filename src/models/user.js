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
)

const addUser = mongoose.model('user', userSchema);

module.exports = {
    addUser
};

