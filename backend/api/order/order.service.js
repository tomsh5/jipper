const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    remove,
    update,
    add
}

async function query() {
    
    const collection = await dbService.getCollection('order')
    try {
        const orders = await collection.find().toArray();
        return orders
    } catch (err) {
        console.log('ERROR: cannot find orders')
        throw err;
    }
}

async function getById(orderId) {
    
    const collection = await dbService.getCollection('order')

    try {
        
        const order = await collection.findOne({"_id":ObjectId(orderId)})
        return order
    } catch (err) {
        console.log(`ERROR: while finding order ${orderId}`)
        throw err;
    }
}

async function remove(orderId) {
    const collection = await dbService.getCollection('order')
    try {
        await collection.deleteOne({"_id":ObjectId(orderId)})
    } catch (err) {
        console.log(`ERROR: cannot remove order ${orderId}`)
        throw err;
    }
}

async function update(order) {
    const collection = await dbService.getCollection('order')
    order._id = ObjectId(order._id);

    try {
        await collection.replaceOne({"_id":order._id}, {$set : order})
        return order
    } catch (err) {
        console.log(`ERROR: cannot update order ${order._id}`)
        throw err;
    }
}

async function add(order) {
    const collection = await dbService.getCollection('order')
    try {
        await collection.insertOne(order);
        return order;
    } catch (err) {
        console.log(`ERROR: cannot insert order`)
        throw err;
    }
}




