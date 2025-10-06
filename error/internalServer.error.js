import { BaseError } from "./base.error.js"; 
import {StatusCodes} from "http-status-codes"

class InternalServorError extends BaseError {

    constructor( details ){
        super("InternalServerError" , StatusCodes.INTERNAL_SERVER_ERROR , "SOMETHING WENT WRONG " ,  details );
    }
}

export {InternalServorError}
