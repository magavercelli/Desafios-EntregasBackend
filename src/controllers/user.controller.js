export const getUsers = async (req,res)=>{
    try {
        res.send({status:"success", payload:"getUsers"})        
        } catch (error) {
            res.send({status:"error", message:error.message})
        }
}
export const getUserById = async (req,res)=>{
    try {
        res.send({status:"success", payload:"getUserById"})        
        } catch (error) {
            res.send({status:"error", message:error.message})
        }
}
export const saveUser = async (req,res)=>{
    try {
        res.send({status:"success", payload:"saveUser"})        
        } catch (error) {
            res.send({status:"error", message:error.message})
        }
}