const router = require('express').Router()
const userHandler = require('./userHandler')


router.get('/', userHandler.getAllUsers)


module.exports = router;