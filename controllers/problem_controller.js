import { NotImplemented } from "../error/notImplemented.error.js";


const  addProblem = ( req , res , next ) => {
    
    try{

        throw new NotImplemented("addProblem")
    }
    catch(error){
        next(error)
    }
};


const  getProblems = ( req , res ,  next ) => {

    try{

        throw new NotImplemented("getProblems")
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