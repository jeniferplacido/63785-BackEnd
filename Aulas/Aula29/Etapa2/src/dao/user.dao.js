const User = require('../models/user.model');

class UserDao {
    static async getUsers() {
        return await User.find();
    }

    static async getUserById(id) {
        return await User.findById(id);
    }

    static async saveUser(user) {
        return await User.create(user);
    }
}

module.exports = UserDao;
