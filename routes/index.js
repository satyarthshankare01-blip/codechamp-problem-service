import express from  "express" ;
import { v1router } from "./V1/index.js";

const approuter = express.Router();

approuter.use("/v1" , v1router );

export { approuter }

