"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const foodSchema = new mongoose_1.default.Schema({
    title: String,
    image: String,
    shop: String,
    price: Number
});
const Food = mongoose_1.default.model('food', foodSchema);
exports.default = Food;
//# sourceMappingURL=food.js.map