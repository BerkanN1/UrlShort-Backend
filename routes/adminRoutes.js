import Express from "express"

import {createAdmin, loginAdmin} from "../controllers/adminController.js"


const route = Express.Router()



route.post("/create-admin", createAdmin)

route.post("/login-admin", loginAdmin)

// route.patch("/update-user/:id", updateUser)

// route.delete("/delete-user/:id", deleteUser)

export default route