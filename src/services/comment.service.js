const commentModels = require("../models/comment.model");

class CommentService {
    createComment({ userId, postId, content }) {
        return commentModels.create({ content, user: userId, post: postId });
    }

    updateCommentById(comment_id, updateData) {
        return commentModels.findByIdAndUpdate(comment_id, updateData, {
            new: true,
            runValidators: true,
        })
    }

    deleteCommentById(comment_id) {
        return commentModels.findByIdAndDelete(comment_id)
    }

    getCommentById(comment_id) {
        return commentModels.findById(comment_id)
    }

}
module.exports = new CommentService();
