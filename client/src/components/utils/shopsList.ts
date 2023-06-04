export const shopsList = (data: any) => {
    const shops = new Set();

    if (data) {
        data.map((item: any) => {
            shops.add(item.shop);
        });
    }

    return Array.from(shops);
}