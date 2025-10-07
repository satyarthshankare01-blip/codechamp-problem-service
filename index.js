import express from "express" ;
import {PORT} from "./config/server.config.js";
import bodyParser from "body-parser"
import { approuter } from "./routes/index.js";
import { errorHandler } from "./utils/errorHandler.js";
import { connectTODB } from "./config/db.config.js";


const app =  express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended : true }));

app.use('/api' , approuter );

app.get('/ping' , (req , res) => {
   return res.json({message: "problem service is alive"})
})




// last middleware if any error comes 
app.use(errorHandler)

app.listen (PORT  , () => {
    console.log(`The server is listening on the PORT : ${PORT} `)
    connectTODB();
    console.log("successfully connected to the DATABASE")
})

