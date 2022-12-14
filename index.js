const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require("dotenv")
const middleware = require('./middleware/index');
const profileRouter = require("./routes/profileRoutes")
const ratingRouter = require("./routes/ratingRoutes")
const complaintRouter = require("./routes/complaintRoutes")


const app = express()
// Use this?
// app.use(
//     express.urlencoded({
//       extended: true,
//     })
//   );
dotenv.config()
//use this for Production
// const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`
//local
MONGO_URL=`mongodb://localhost:27017/testdb`
const mongoURL = MONGO_URL
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

app.use("/onboarding", profileRouter)
app.use("/rating", ratingRouter)
app.use("/complaints", complaintRouter)


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`))


//Todo:
//add error loggers 
//add analytics
