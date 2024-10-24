const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: {type: string, required: true, unique: true},
    desc: {type: string, required: true},
    img: {type: string, required: true},
    categories: {type: array},
    size: {type: string},
    color: {type: string},
    price: {type: string, required: true},
},
{timestamps: true}
);

module.exports = mongoose.model('Product', ProductSchema);
