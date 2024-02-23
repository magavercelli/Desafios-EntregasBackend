import ProductManagerDB from "../dao/dbManager/ProductManagerDB.js";

const productManagerDB = new ProductManagerDB();

class ProductService {
    static getProducts = async ()=> {
        const product = await productManagerDB.getProducts();
        return product;
    }
    static addProduct = async (product) => {
        const result =  await productManagerDB.addProduct(product);
        return result;
    }
};

export { ProductService };