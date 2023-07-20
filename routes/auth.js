const router = require("express").Router();
const User = require('../model/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {registerValidation, loginValidation} = require('../validation')
const Dotenv = require('dotenv')

Dotenv.config();
// register Validation
router.post('/register', async (req, res) =>{
    // Validate User Data
    const { error } = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message)

    // Checking if 
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send("Email already exists")


    //Hashing Password
    const salt = await bcrypt.genSalt(10); // first generate salt than
    const hashPassword = await bcrypt.hash(req.body.password, salt); // hash password with salt

    //create a new user
    const user = new User({
        name:req.body.name,
        email:req.body.email,
        password: hashPassword
    })
    try{
        const savedUser = await user.save();
        res.send(savedUser);
    }catch(err){
        res.status(400).send(err);
    }
});


router.post('/login', async (req, res) =>{
    // Validate User Data
    const { error } = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    // Checking if  email exist
    const emailExist = await User.findOne({email: req.body.email});
    if(!emailExist) return res.status(400).send("Email not found!");

    // Checking if  password exist
    const passValid = await User.findOne({password: req.body.password});
    if(!passValid) return res.status(400).send("Password not found!");

    const token = jwt.sign({_id: user._id}, process.env.TOKENACESS);
    res.header('auth-token', token.send(token));

    res.send("Log in!")

module.exports = router;