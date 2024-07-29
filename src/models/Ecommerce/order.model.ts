import mongoose from 'mongoose'

const itemsSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },

    Quantity: {
        type: Number,
        required: true
    }
})

const addressSchema = new mongoose.Schema({
    state: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    postalCode: {
        type: Number,
        required: true
    },

    street: {
        type: String,
        required: true
    }
})

const orderSchema = new mongoose.Schema({
    price: {
        type: Number,
        required: true,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },

    products: {
        type: [itemsSchema]
    },

    address: {
        type: addressSchema,
        required: true
    },

    status: {
        type: String,
        enum: ['PENDING', 'DELIVERED', 'CANCELED'],
        default: 'PENDING'
    }

}, {timestamps: true})

export const Order = mongoose.model('Order', orderSchema)