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
    
    const collection = await dbService.getCollection('cart')
    try {
        const products = await collection.toArray();
        return products
    } catch (err) {
        console.log('ERROR: cannot find products')
        throw err;
    }
}

async function getById(productId) {
    
    const collection = await dbService.getCollection('cart')

    try {
        
        const product = await collection.findOne({"_id":ObjectId(productId)})
        return product
    } catch (err) {
        console.log(`ERROR: while finding product ${productId}`)
        throw err;
    }
}

async function remove(productId) {
    const collection = await dbService.getCollection('cart')
    try {
        await collection.deleteOne({"_id":ObjectId(productId)})
    } catch (err) {
        console.log(`ERROR: cannot remove product ${productId}`)
        throw err;
    }
}

async function update(product) {
    const collection = await dbService.getCollection('cart')
    product._id = ObjectId(product._id);

    try {
        await collection.replaceOne({"_id":product._id}, {$set : product})
        return product
    } catch (err) {
        console.log(`ERROR: cannot update product ${product._id}`)
        throw err;
    }
}

async function add(product) {
    const collection = await dbService.getCollection('cart')
    try {
        await collection.insertOne(product);
        return product;
    } catch (err) {
        console.log(`ERROR: cannot insert product`)
        throw err;
    }
}




