import Order from "../models/order";

export const createOrder = async (req: any, res: any) => {
    const order = req.body;

    const newOrder = new Order({ ...order, id: req.orderId, createdAt: new Date().toISOString() })

    try {
        await newOrder.save();

        res.status(201).json(newOrder);
    } catch (error: any) {
        res.status(409).json({ message: error.message });
    }
}