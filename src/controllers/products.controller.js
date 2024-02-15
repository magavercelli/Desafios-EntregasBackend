import { ProductService } from '../services/products.service.js';

const productService = new ProductService();

class  ProductsController {
    static getProducts = async (req,res)=> {
        try {
            const { limit = 10, page = 1, sort = '', query = '' } = req.query;
            const products = await productService.getProducts( limit, page, sort, query );
            res.send({products});
    
        } catch (error) {
            console.log('Error:', error);
            res.status(500).send('Internal Server Error');
        }
    }

    static getProductById = async (req,res)=> {
        try {
            const productId = req.params.pid;
            const product = await productService.getProductById(productId);
            res.send({ product });
        } catch (error) {
            console.log('Error:', error);
            res.status(500).send('Internal Server Error');
        }
    }

    static addProduct = async (req, res)=> {
        try {
            const {title, description, price,  thumbnail: [foto1, foto2], code, stock, status, category} = req.body;
            if(!title || !description || !price || !thumbnail || !code || !stock || !status || !stock){
            return res.status(400).send({error: 'Datos incompletos'});
    }

        let newProduct = {
            id,
            title, 
            description,
            price,
            thumbnail: [foto1, foto2],
            code,
            stock,
            status: true,
            category
    }

        const result = await productService.addProduct(newProduct);
        res.send({result});
        } catch (error) {
            console.log('Error:', error);
            res.status(500).send('Internal Server Error');
        }
    }
}

export { ProductsController };