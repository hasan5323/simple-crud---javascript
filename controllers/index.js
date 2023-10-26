// require
const { User } = require('../models')
const bcryptUtil = require('../helper/hashing')
//controller
class Controller {
    static default(req,res){
        res.redirect("/login")
    }
    static login(req,res){
        res.render("loginpage")
    }
    static async postLogin(req,res){
      try {
        const { username, password } = req.body;  
        const user = await User.findOne({username: username})
        if (!user){
          res.status(201).json({ message: 'User not found.' });
        } else {
          const passwordMatch =  await bcryptUtil.comparePassword(password, user.password)
          if (passwordMatch) {
            res.redirect('/main')
            res.status(201).json({ message: 'User registered successfully.' });
          }
        }
      
      } catch (error) {
        res.status(500).json({ message: 'Error occurred during registration.' });
      }
    }
    static async register(req,res){
     res.render('registerpage')
    }
    static async postRegister(req,res) {
            try {
              const { username, password, role } = req.body;  
              const hashedPassword = await bcryptUtil.hashPassword(password);
          
              // Create a new user record with the hashed password and specified role
              await User.create({ username, passwordHash: hashedPassword, role });
          
              res.status(201).json({ message: 'User registered successfully.' });
            } catch (error) {
              res.status(500).json({ message: 'Error occurred during registration.' });
            }

    }
    
}
//export
module.exports = Controller