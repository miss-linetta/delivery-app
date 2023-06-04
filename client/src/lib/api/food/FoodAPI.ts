import instance from "../instance";
import { FetchAllDTO } from "./dto/FetchAllDTO";

export class FoodAPI {
    static async fetchFood(): Promise<FetchAllDTO> {
        const { data } = await instance.get('/food');
        return data;
    }
}