const getItem = () => {
    const getCart = localStorage.getItem('rivo');
    if (getCart) {
        return JSON.parse(getCart);
    }
    return [];
}
const saveCart = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('rivo', cartStringified);
}
const addToLs = id => {
    const cart = getItem();
    const exists = cart.find(cartId => cartId === id);
    if (!exists) {
        cart.push(id);
        saveCart(cart);
    }
}

const deleteFromLs = id => {
    const cart = getItem();
    const index = cart.findIndex(cartId => cartId === id);
    if (index !== -1) {
        cart.splice(index, 1);
        saveCart(cart);
    }
};
export { addToLs, getItem, deleteFromLs }