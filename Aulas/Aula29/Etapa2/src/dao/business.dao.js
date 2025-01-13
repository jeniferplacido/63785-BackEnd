const Business = require('../models/business.model');

class BusinessDao {
    static async getBusiness() {
        return await Business.find();
    }
    static async getBusinessById(bid) {
        return await Business.findById(bid);
    }
    static async createBusiness(business) {
        return await Business.create(business);
    }
}

module.exports = BusinessDao;