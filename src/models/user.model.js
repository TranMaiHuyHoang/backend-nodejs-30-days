
const mongoose = require('mongoose')
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,

        },

        password: {
            type: String,
            required: true,
            minlength: 6,
        },

        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user"
        },

        age: {
            type: Number,
        },




    },
    { timestamps: true }
);
// Được viết những function phụ trợ liên quan - mã hoá mật khẩu, giải mã mật khẩu
// previous - next
userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// Phương thức - function để so sánh mật khẩu
// plainPassword: mật khẩu người dùng nhập vào
// this.password: mật khẩu đã mã hoá trong database
userSchema.methods.comparePassword = async function (plainPassword) {
    return bcrypt.compare(plainPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
