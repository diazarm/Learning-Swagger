const {Router} = require ('express')
const userRouter = require('../core/users/userRouter')

const mainRouter = Router();

mainRouter.use("/users", userRouter);


module.exports = mainRouter;