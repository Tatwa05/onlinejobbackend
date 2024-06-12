const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()


//mongodb Compass Connections
//const dburl = "mongodb://localhost:27017/demoproject14"
const dburl = process.env.mongodburl
mongoose.connect(dburl).then(() => {
    console.log("Connected to DB Successfully")
}).catch((err) => {
    console.log(err.message)
});

//mongoDB Atlas Connection
const dbsurl = "mongodb+srv://admin:admin@cluster0.hn4ftyc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(dbsurl).then(() => {
    console.log("Connected to MongoDB Atlas Successfully")
}).catch((err) => {
    console.log(err.message)
});


const app = express() 
app.use(cors())
app.use(express.json())  // to parse JSON data

const adminrouter = require("./routes/adminroutes")
const jobseekerrouter = require("./routes/jobseekerroutes")
const recruiterrouter = require("./routes/recruiterroutes")

app.use("",adminrouter) // to include all admin routes
app.use("",jobseekerrouter) // to include all job seeker routes
app.use("",recruiterrouter) // to include all recruiter routes

//const port=2014
const port = process.env.PORT || 2014
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})