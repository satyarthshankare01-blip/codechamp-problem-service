import { BaseError } from "./base.error.js"; 
import {StatusCodes} from "http-status-codes"

class NotImplemented extends BaseError {

    constructor( methodname  ){
        super("NotImplemented" , StatusCodes.NOT_IMPLEMENTED , `${methodname} not implemented` ,  {});
    }
}

export {NotImplemented}
