const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require("dotenv")
const middleware = require('./middleware/index');
const profileRouter = require("./routes/profileRoutes")
const userRouter = require("./routes/userRoutes")
const ideaRouter = require("./routes/ideaRoutes")

const app = express()
dotenv.config()
//use this for Production
// const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`
//local
MONGO_URL=`mongodb://localhost:27017/testdb`
const mongoURL = process.env.MONGO_URL
const connectWithRetry = () =>{
mongoose
    .connect(mongoURL)
    .then(()=> console.log("Successfully connected to DB"))
    .catch((e)=> {
        console.log(e)
        setTimeout(connectWithRetry, 5000)
    })
}
connectWithRetry()

app.enable("trust proxy");
app.use(cors({}))
app.use(express.json())
//Middleware
// app.use(middleware.decodeToken);

// app.use("/onboarding", profileRouter)
// app.use("/user", userRouter)
// app.use("/ideabrekrr", ideaRouter)


const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`Listening on port ${port}`))


//Todo:
//add error loggers 
//add analytics
