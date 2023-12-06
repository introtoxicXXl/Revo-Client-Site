const getItem = () => {
    const getCart = localStorage.getItem('rivo');
    if (getCart) {
        return JSON.parse(getCart);
    }
    return [];
}
const saveCart = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('donate', cartStringified);
}
const addToLs = id => {
    const cart = getItem();
    const exists = cart.find(cartId => cartId === id);
    if(!exists){
        cart.push(id);
        saveCart(cart);
    }
}
export { addToLs, getItem }