const postModel = require("../models/post.model");

class PostService {
    createPost(newPost, userId) {
        return postModel.create({ ...newPost, user: userId });
    }

    getListPosts() {
        const posts = postModel.find({})// lay danh sach post
            .populate({
                path: 'user',
                select: 'name email'
            })

        return posts;
    }

    getPostById(post_id) {
        return postModel.findById(post_id);

    }

    deletePostById(post_id) {
        return postModel.findByIdAndDelete(post_id);
    }

    updatePostById(id, data) {
        return postModel.findByIdAndUpdate(id, data, { new: true, runValidators: true, });
    }

    // lay danh sach bai viet cua mot user
    getPostByUserId(userId) {
        return postModel.find({ user: userId })
    }

}

module.exports = new PostService();
