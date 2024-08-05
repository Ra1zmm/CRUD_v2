import express from "express"
import { create,fetch,deleteUser,update } from "../controlers/userControler.js"


const route = express.Router()

route.post('/create',create)
route.get('/fetch',fetch)
route.delete('/delete/:id',deleteUser)
route.put('/update/:id',update)





export default route