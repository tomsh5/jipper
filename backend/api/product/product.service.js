const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    remove,
    update,
    add
}

async function query(filterBy = {}) {
    console.log(filterBy);
    const sortBy = _buildSortBy(filterBy)
    const criteria = _buildCriteria(filterBy)
    console.log(criteria);
    const collection = await dbService.getCollection('product')
    try {

        const products = await collection.find(criteria).sort(sortBy).toArray();


        return products
    } catch (err) {
        console.log('ERROR: cannot find products')
        throw err;
    }
}

function _buildCriteria(filterBy) {
    const criteria = {};
    if (filterBy.txt) {
        criteria.name = {$regex:new RegExp(filterBy.txt,'i')}
    }
 
    if (filterBy.tags_like) {
        criteria.tags = filterBy.tags_like
    }

    return criteria;
}

function _buildSortBy(filterBy) {
    const sortBy = {};
    if (filterBy._order&& filterBy._sort) {
        filterBy._order = filterBy._order === 'asc' ? 1 : -1
        sortBy[filterBy._sort] = filterBy._order
    }

    return sortBy;
}

async function getById(productId) {
    
    const collection = await dbService.getCollection('product')

    try {
        
        const product = await collection.findOne({"_id":ObjectId(productId)})
        return product
    } catch (err) {
        console.log(`ERROR: while finding product ${productId}`)
        throw err;
    }
}

async function remove(productId) {
    const collection = await dbService.getCollection('product')
    try {
        await collection.deleteOne({"_id":ObjectId(productId)})
    } catch (err) {
        console.log(`ERROR: cannot remove product ${productId}`)
        throw err;
    }
}

async function update(product) {
    const collection = await dbService.getCollection('product')
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
    const collection = await dbService.getCollection('product')
    try {
        await collection.insertOne(product);
        return product;
    } catch (err) {
        console.log(`ERROR: cannot insert product`)
        throw err;
    }
}




