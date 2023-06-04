"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const orderScheme = new mongoose_1.default.Schema({
    id: { type: String },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    address: { type: String, required: true },
    items: { type: (Array), required: true },
    creationDate: {
        type: Date,
        default: new Date()
    }
});
const Order = mongoose_1.default.model('Order', orderScheme);
exports.default = Order;
//# sourceMappingURL=order.js.map