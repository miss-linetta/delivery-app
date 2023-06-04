import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    title: String,
    image: String,
    shop: String,
    price: Number
});

const Food = mongoose.model('food', foodSchema);

export default Food;