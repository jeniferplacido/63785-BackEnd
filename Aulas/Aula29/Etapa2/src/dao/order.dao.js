const Order = require('../models/order.model');

class OrderDao {
    static async getOrders() {
        return await Order.find();
    }

    static async getOrdersById(oid) {
        return await Order.findById(oid);
    }
    static async createOrder(order) {
        return await Order.create(order);
    }
}

module.exports = OrderDao;