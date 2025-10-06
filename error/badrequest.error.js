import { BaseError } from "./base.error.js"; 
import {StatusCodes} from "http-status-codes"

class BadRequest extends BaseError {

    constructor(propertyname , details ){
        super("BadRequest" , StatusCodes.BAD_REQUEST , `Invalid structure for ${propertyname} provided` ,  details );
    }
}

export {BadRequest}
