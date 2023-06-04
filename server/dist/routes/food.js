"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const food_1 = require("../controllers/food");
const foodRoutes = express_1.default.Router();
foodRoutes.get('/', food_1.getFood);
exports.default = foodRoutes;
//# sourceMappingURL=food.js.map