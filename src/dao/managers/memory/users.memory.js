import { v4 as uuidv4 } from 'uuid';

export class UsersMemory {
    constructor(){
        this.users =[]
    
};

getAllUsers(){ 
    try {
        return this.users;
    } catch (error) {
        throw new Error(error.message)
    }
    
};

saveUser(first_name, last_name, email, age, password,role){
    try {
        const newUser = {
            first_name,
            last_name,
            email,
            age,
            password,
            role,
            id: uuidv4()
          };
          return newUser
        
    } catch (error) {
        throw new Error(error.message)
        
    }
    
};

async getUserById(id){
    const contact = await this.contacts.find(u=>u.id === id);
    if(!contact){
        throw new Error("No se encontro el usuario");
    }
    return contact;
}

updateUser(id,user){
    try {
        return id,user;
    } catch (error) {
        throw new Error(error.message)
        
    }   
}

}