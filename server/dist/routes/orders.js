"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const orders_1 = require("../controllers/orders");
const ordersRoutes = express_1.default.Router();
ordersRoutes.post('/orders', orders_1.createOrder);
exports.default = ordersRoutes;
//# sourceMappingURL=orders.js.map