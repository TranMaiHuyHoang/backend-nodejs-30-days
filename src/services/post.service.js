const postModel = require("../models/post.model");

class PostService {
    createPost(newPost) {
        return postModel.create(newPost);
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

}

module.exports = new PostService();
