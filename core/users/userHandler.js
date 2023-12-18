const {getAllUserController} = require('./userController')

const getAllUsers = async(req, res)=>{
    const getAllUsers = await getAllUserController()
    if (getAllUsers){
        res.status(200).json(getAllUsers);
    } else {
        res.status(400).json({message: "there are no active users"})
    }
}


module.exports = {getAllUsers};