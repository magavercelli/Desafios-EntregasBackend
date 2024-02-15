import { CartService } from "../services/carts.service.js";

class CartsController {
    static getCarts= async (req, res)=>  {
        try {
            const carts = await CartService.getCarts();
            res.json({ status: 'success', carts });
        } catch (error) {
            console.error('Error getting all carts:', error);
            res.status(500).json({ status: 'error', message: 'Internal Server Error' });
        }
    };

    static getCartById = async (req, res)=> {
        try {
            const { cid } = req.params;
            const cart = await CartService.getCartById(cid);
            if (!cart) {
                res.status(404).json({ status: 'error', message: 'Cart not found' });
            } else {
                res.json({ status: 'success', cart });
            }
        } catch (error) {
            console.error('Error getting cart by ID:', error);
            res.status(500).json({ status: 'error', message: 'Internal Server Error' });
        }
    }

    static getCartProductById = async (req,res)=> {
        try {
            const cartId = req.params.cid;
            const cart = await CartService.getCartProductById(cartId);
         
    
            if (cart !== 'Cart not found') {
                res.json(cart)
            }else {
                res.send({
                    message: 'Cart not found'});
            }
            
        } catch (error) {
            console.log('Error:', error);
        }
    }

    static addNewCart = async (req,res)=> {
        try {
            const cart = await CartService.addNewCart();
    res.send({
        status: 'succes',
        msg: cart
    })
        } catch (error) {
            onsole.error('Error adding new cart:', error);
            res.status(500).json({ status: 'error', message: 'Internal Server Error' });
        }
    }

    static addProductToCart = async (req,res) =>{
        try {
                const cid = req.params.cid;
        const pid = req.params.pid;
        const quantity = req.params.quantity


        const cart = await CartService.addProductToCart(cid, pid, quantity);

        res.send ({
            status : 'sucess',
            msg: cart
        })
        } catch (error) {
            onsole.error('Error adding product to cart:', error);
            res.status(500).json({ status: 'error', message: 'Internal Server Error' });
        }
    }

    static deleteProductsInCart =async (req,res)=> {
        const { cid, pid } = req.params;
        try {
            const result = await CartService.deleteProductsInCart(cid, pid);
            res.json(result);
        } catch (error) {
            console.error('Error deleting product from cart:', error);
            res.send({ 
                status: 'error', 
                msg: 'Internal Server Error'
             });
        }
    
    }

    static updatedCart = async (req,res)=>  {
        const { cid } = req.params;
        const { updatedProduct } = req.body;

        try {
            const result = await CartService.updatedCart(cid, updatedProduct);
            res.json(result);
        } catch (error) {
            console.error('Error updating cart:', error);
            res.send({ 
                status: 'error', 
                msg: 'Internal Server Error' 
            });
        }
    }

    static updateProductQuantity = async (req,res) => {
        const { cid, pid } = req.params;
        const { quantity } = req.body;

        try {
            const result = await CartService.updateProductQuantity(cid, pid, quantity);
            res.json(result);
        } catch (error) {
            console.error('Error updating product quantity in cart:', error);
            res.send({ 
                status: 'error', 
                msg: 'Internal Server Error' 
            });
        }

    }

    static deleteAllProductsInCart = async (req, res)=> {
        const { cid } = req.params;

        try {
            const result = await CartService.deleteAllProductsInCart(cid);
            res.json(result);
        } catch (error) {
            console.error('Error deleting all products from cart:', error);
            res.send({ 
                status: 'error', 
                msg: 'Internal Server Error' 
            });
        }
    }

}

export {CartsController};