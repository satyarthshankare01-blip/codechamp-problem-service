import express, { application } from "express" ;

import { problemRouter } from "./problem.routes.js";

const v1router = express.Router();

v1router.use('/problems' , problemRouter);

export { v1router};
