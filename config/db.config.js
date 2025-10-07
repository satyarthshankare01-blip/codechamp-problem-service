import mongoose from "mongoose"
import { ATLAS_DB_URL , NODE_ENV } from "./server.config.js";

const connectTODB = async ( ) => {

    try{
        if( NODE_ENV == "DEVELOPEMENT"){
          await mongoose.connect( ATLAS_DB_URL )
        }
    }
    catch(error){
         console.log("unable to connect to db server ")
         console.log(error)
    }
}

export { connectTODB }