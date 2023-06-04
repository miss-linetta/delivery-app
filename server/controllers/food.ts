import mongoose from "mongoose";
import express from 'express';
import food from "../models/food";

const router = express.Router();

export const getFood = async (req: any, res: any) => {
    try {
        const foodItems = await food.find();

        console.log(foodItems);

        res.status(200).json(foodItems);
    } catch (error: any) {
        res.status(404).json({ message: error.message })
    }
}