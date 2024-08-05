import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import user_route from "./routes/userRoute.js"
import bodyParser from "body-parser"

dotenv.config()

const app= express()
const PORT = process.env.PORT
const MongoURL = process.env.MongoURL
app.use(bodyParser.json());

console.log("XXXxxxx", MongoURL)

// mongourl from .env file 

mongoose.connect(MongoURL).then(
    ()=> {console.log("connected to db")
    app.listen(PORT,()=> console.log(`The server is runing in Port ${PORT}`))}
).catch(Error=>console.log(Error))

app.use('/users',user_route)