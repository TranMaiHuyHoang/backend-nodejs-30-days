const mongoose = require("mongoose");

const reactionSchema = new mongoose.Schema(
    {
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
            required: true,
            index: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true
        },
        type: {
            type: String,
            enum: ["like", "dislike"],
            default: "like"
        }
    },
    { timestamps: true }
);
// 1 user - 1 post chỉ có 1 reaction
reactionSchema.index({ post: 1, user: 1 }, { unique: true });
module.exports = mongoose.model("Reaction", reactionSchema);
