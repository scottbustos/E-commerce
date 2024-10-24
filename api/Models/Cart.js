const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
    userId: {type: string, required: true},
    products: [
        {
            productId: {type: string},
            quantity: {type: number, defualt: 1},
        }
    ]
},
{timestamps: true}
);

module.exports = mongoose.model('Cart', CartSchema);
