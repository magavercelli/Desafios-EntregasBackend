import CartManagerDB from "../dao/managers/dbManager/CartManagerDB.js";

const  cartManagerDB = new CartManagerDB();

class CartService {
    static getCarts = async ()=> {
        const carts = await cartManagerDB.getCarts();
        return carts
    }
    static addNewCart = async (cart) => {
        const result = await cartManagerDB.addNewCart(cart);
        return result;
    }
}

export { CartService };