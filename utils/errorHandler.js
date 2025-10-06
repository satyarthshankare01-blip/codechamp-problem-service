import {StatusCodes} from "http-status-codes";
import { BaseError } from "../error/base.error.js";

const errorHandler = (err , req , res , next) => {
  
    if( err  instanceof  BaseError ){
        res.status(err.statusCode).json ({
            success : false ,
            message : err.message ,
            error : err.details , 
            details : {}
        })
    }

  
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success : false ,
        meassge : "Internal server error ",
        error : err , 
        details : {}
    })
}

export { errorHandler }
