"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config({ path: './.env' });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const food_1 = __importDefault(require("./routes/food"));
const orders_1 = __importDefault(require("./routes/orders"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/food', food_1.default);
app.use('/orders', orders_1.default);
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 3000;
function start() {
    try {
        mongoose_1.default.connect(CONNECTION_URL);
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    }
    catch (error) {
        console.log(error);
    }
}
start();
//# sourceMappingURL=index.js.map