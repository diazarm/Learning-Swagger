const getAllUserController = require('../users/userController')

const getAllUsers = async(req, res)=>{
    const getAllUsers = await getAllUserController()
    if (getAllUsers){
        res.status(200).json(getAllUsers);
    } else {
        res.status(400).json({message: "there are no active users"})
    }
}


const getAllUsersByName = async(req, res)=>{
    const getAllUsers = await getAllUserController()
    if (getAllUsers){
        const userNames = getAllUsers.map(user => user.name);
        res.status(200).json({ userNames });    
    } else {
        res.status(400).json({message: "there are no active users"})
    }
}



module.exports = {getAllUsers, getAllUsersByName};