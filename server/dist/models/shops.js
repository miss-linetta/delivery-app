"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const shopSchema = new mongoose_1.default.Schema({
    title: String,
    items: [Object]
});
const Shop = mongoose_1.default.model('Shop', shopSchema);
exports.default = Shop;
//# sourceMappingURL=shops.js.map