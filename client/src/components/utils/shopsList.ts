export const shopsList = (data: any[]): string[] => {
    const shops = new Set<string>();
  
    if (data) {
      data.forEach((item: any) => {
        shops.add(item.shop);
      });
    }
  
    return Array.from(shops);
  };
  