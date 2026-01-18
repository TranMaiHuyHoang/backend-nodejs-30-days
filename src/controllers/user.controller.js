const userService = require("../services/user.service");

class UserController {
    // ngầm hiểu createUser là function
    async createUser(req, res) {
        try {
            const newUser = req.body;
            const result = await userService.createUser(newUser);
            res.status(201).json({ message: "User create successfully", data: result });
        } catch (error) {
            res.status(500).json("Internal Server Error");
        }
    }

    async getAllUsers(req, res) {
        try {
            const users = await userService.getAllUsers();
            res.status(200).json({ message: "User retrieved successfully", data: users });
        } catch (error) {
            res.status(500).json("Internal Server Error");
        }
    }

    async getUserById(req, res) {
        try {
            const user = await userService.getUserById(req.params.id);
            res.status(200).json({ message: "User retrieved successfully", data: user });
        } catch (error) {
            res.status(500).json("Internal Server Error");
        }
    }

    async deleteUserById(req, res) {
        try {
            const user = await userService.deleteUserById(req.params.id);
            res.status(200).json({ message: "User delete successfully", data: user });
        } catch (error) {
            res.status(500).json("Internal Server Error");
        }
    }

    async updateUserById(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;
            const updatedUser = await userService.updateUserById(id, data);
            res.status(200).json({ message: "User update successfully", data: updatedUser });
        } catch (error) {
            res.status(500).json("Internal Server Error");
        }
    }
}


module.exports = new UserController();
