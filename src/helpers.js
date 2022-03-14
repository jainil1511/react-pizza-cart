export const getCart = () => {
    return new Promise((resolve,reject) =>{
        const cart = window.localStorage.getItem('cart');
        resolve(cart);
    })
    
}
export const storecart = (cart) => {
    window.localStorage.setItem('cart',JSON.stringify(cart));
}