import { NotImplemented } from "../error/notImplemented.error.js";
import { ProblemService } from "../services/problem.service.js";
import { ProblemRepository } from "../repositories/problem.repository.js";
import {StatusCodes } from "http-status-codes" ; 

const problemService = new ProblemService( new ProblemRepository() );

const  addProblem = async  ( req , res , next ) => {
    
    try{
           
       const newproblem = await problemService.createProblem(req.body);
       return res.status(StatusCodes.CREATED).json({
        success: true , 
        message: "Successfully created a new problem ",
        error : {} ,
        data : newproblem
       })
        
    }
    catch(error){
        next(error)
    }
};


const  getProblems = async  ( req , res ,  next ) => {

    try{
 
    const response  = await problemService.getAllProblems();
    return res.status(StatusCodes.OK).json({
    success: true ,
    message: "successfully fetche all the problems",
    error : {},
    data : response
    })
  
    }
    catch(error){
        next(error)
    }


};


const deleteProblem = ( req , res  , next ) => {

try{
        throw new NotImplemented("deleteProblem")
    }
    catch(error){
        next(error)
    }
};




const updateProblem = ( req , res , next ) => {

try{
        throw new NotImplemented("updateProblem")
    }
    catch(error){
        next(error)
    }
};




const getProblem = ( req , res , next ) => {

try{
        throw new NotImplemented("getProblem")
    }
    catch(error){
        next(error)
    }

};




export { 
    addProblem,
    getProblem,
    deleteProblem,
    updateProblem,
    getProblems

};