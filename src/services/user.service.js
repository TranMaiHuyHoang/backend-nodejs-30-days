const userModel = require("../models/user.model");

class UserService {

    // tạo người dùng mới
    createUser(newUser) {
        return userModel.create(newUser);
    }

    // trả về tất cả người dùng
    getAllUsers() {
        return userModel.find({}); // tra ve tat ca nguoi dung
    }

    // laays 1 nguoi dung
    getUserById(id) {
        return userModel.findById(id);
    }

    // xoa mot nguoi dung
    deleteUserById(id) {
        return userModel.findByIdAndDelete(id);
    }

    // cập nhật người dùng
    updateUserById(id, data) {
        return userModel.findByIdAndUpdate(id, data, { new: true, runValidators: true, });
    }

}
module.exports = new UserService();
