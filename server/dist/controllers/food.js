"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFood = void 0;
const express_1 = __importDefault(require("express"));
const food_1 = __importDefault(require("../models/food"));
const router = express_1.default.Router();
const getFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const foodItems = yield food_1.default.find();
        console.log(foodItems);
        res.status(200).json(foodItems);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.getFood = getFood;
//# sourceMappingURL=food.js.map