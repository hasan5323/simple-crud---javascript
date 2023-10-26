const express = require("express")
const router = express.Router()
const Controller = require('../controllers')
const bcryptUtil = require('../helper/hashing')
// routes
router.get('/', Controller.default)

router.get('/login', Controller.login)
router.post('/login', Controller.postLogin)

router.get('/register', Controller.register)
router.post('/register', Controller.postRegister);

router.get('/main', Controller.main)
  

module.exports = router