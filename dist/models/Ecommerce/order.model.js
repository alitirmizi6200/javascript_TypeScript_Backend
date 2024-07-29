"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const itemsSchema = new mongoose_1.default.Schema({
    product: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Product'
    },
    Quantity: {
        type: Number,
        required: true
    }
});
const addressSchema = new mongoose_1.default.Schema({
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
});
const orderSchema = new mongoose_1.default.Schema({
    price: {
        type: Number,
        required: true,
    },
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
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
}, { timestamps: true });
exports.Order = mongoose_1.default.model('Order', orderSchema);
