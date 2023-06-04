export function generateOrderID() {
    const timestamp = Date.now().toString(); 
    const randomNumber = Math.floor(Math.random() * 10000).toString(); 
    return timestamp + randomNumber;
}

  