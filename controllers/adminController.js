import {ShortlyAdmin as Admin} from '../models/admin.js'
import bcrypt from 'bcryptjs'



export const createAdmin = async(req, res) =>{
   try {
    const { firstName, lastName, email,password,} = req.body;
    const userCheck = await Admin.findOne({email:email})
    if(userCheck) return res.status(404).send("user already exists")
    const passwordHash = await bcrypt.hash(password, 12)
    const newUser = new Admin({email,firstName, lastName, passwordHash})
    await newUser.save()
    res.status(200).send(newUser)
   } catch (err) {
    console.log(err)
    res.status(500).send("server error"+ err.message)
   }
}


   export const loginAdmin = async(req, res) =>{
    try {
     const {email,password} = req.body;
     const validatedUser = await Admin.findOne({email:email})
     if(!validatedUser) return res.status(404).send("User doesn't exists")


     const correctPassword = bcrypt.compareSync(password, validatedUser.passwordHash)
     if(!correctPassword) return res.status(404).send("the password is incorrect")
     
     res.status(200).send(validatedUser)
     
    } catch (err) {
     console.log(err)
     res.status(500).send("server error"+ err.message)
    }
 
}