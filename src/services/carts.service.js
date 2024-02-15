import CartManagerDB from "../dao/dbManager/CartManagerDB.js";

const  cartManagerDB = new CartManagerDB();

class CartService {
    static getCarts = ()=> {
        const carts = cartManagerDB.getCarts();
        return carts
    }
    static addNewCart = (cart) => {
        const result = cartManagerDB.addNewCart(cart);
        return result;
    }
}

export { CartService };