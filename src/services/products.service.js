import ProductManagerDB from "../dao/dbManager/ProductManagerDB.js";

const productManagerDB = new ProductManagerDB();

class ProductService {
    static getProducts = ()=> {
        const product = productManagerDB.getProducts();
        return product;
    }
    static addProduct = (product) => {
        const result =  productManagerDB.addProduct(product);
        return result;
    }
};

export { ProductService };