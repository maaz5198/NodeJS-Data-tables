import bodyParser from "body-parser"
import express from "express"
import db from "./config/database.js"
import studentRouter from "./routes/StudentsRoutes.js"

const port = 8082;

const app = express()

app.use(bodyParser.urlencoded())
app.use('/',studentRouter);



app.listen(port,(error)=>{
    if(!error){
        console.log("Server start");
        console.log("http://localhost:"+port);
    }
})