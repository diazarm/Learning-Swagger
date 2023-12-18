const router = require('express').Router()
const userHandler = require('./userHandler')


router.get('/', userHandler.getAllUsers)
router.get('/name', userHandler.getAllUsersByName)

module.exports = router;