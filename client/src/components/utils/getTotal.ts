import { Item } from "../pages/cart-page/components/Form/Form";

export const getTotal = (cartItems: Array<Item>) => {
    const total = cartItems.reduce(
      (accumulator: number, currentValue: Item) =>
        accumulator + currentValue.price,
      0
    );

    return total;
};