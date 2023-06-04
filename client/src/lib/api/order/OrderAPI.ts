import instance from "../instance";
import { OrderBody } from './dto/OrderBody';

export class OrderAPI {
    static async createOrder(orderId: string, body: OrderBody) {
        const { data } = await instance.post(
          `/order/${orderId}`,
          body
        );
        return data;
    }
}