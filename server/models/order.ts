import mongoose from "mongoose";

const orderScheme = new mongoose.Schema({
    id: { type: String },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone:{ type: Number, required: true },
    address: { type: String, required: true },
    items: { type: Array<String>, required: true },
    creationDate: {
        type: Date,
        default: new Date()
    }
});

const Order = mongoose.model('Order', orderScheme);

export default Order;