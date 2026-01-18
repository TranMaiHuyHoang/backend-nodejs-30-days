const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {

        title: {
            type: String,
            required: true,
            trim: true
        },

        content: {
            type: String,
            required: true,
        },

        //FR relationship to User model
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        status: {
            type: String,
            enum: ['draft', 'published'],
            default: 'draft'
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Post', postSchema)
