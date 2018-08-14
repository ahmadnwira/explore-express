const ItemModel = require('../models/item');

async function getAll() {
    return ItemModel.find({}).sort({ createdAt: -1 });
}

async function getOne(itemId) {
    return ItemModel.findOne({ _id: itemId });
}

async function destroy(itemId) {
    return ItemModel.deleteOne({ _id: itemId });
}

async function store(data) {
    // item = {name: staring, price: number}
    const item = new ItemModel(data);
    return item.save();
}

async function patch(itemId, data) {
    // item = {name: staring, price: number}
    const item = await getOne(itemId);

    if(!item) throw new Error('item was not found.');

    Object.keys(data).forEach(key=>{
        item[key] = data[key];
    });

    return item.save();
}

module.exports = {
    getAll,
    getOne,
    destroy,
    store,
    patch
};