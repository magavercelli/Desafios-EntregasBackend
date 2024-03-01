import UserManagerDB from '../dao/managers/dbManager/UserManagerDB.js';

const userManagerDB = new UserManagerDB();

class UserService {
    static getAllUsers = async ()=> {
        const product = await userManagerDB.getAllUsers();
        return product;
    }
    static getUserById = async (id) => {
        const result =  await userManagerDB.getUserById(id);
        return result;
    }
    static saveUser = async(first_name, last_name, email, age, password,role) => {
        const result = await userManagerDB.saveUser(first_name, last_name, email, age, password,role);
        return result;

    }
    static  updateUser = async (id,user) =>{
        const result = await userManagerDB.updateUser(id,user);
        return result;
    }
}