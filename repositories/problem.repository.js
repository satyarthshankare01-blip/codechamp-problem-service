import { Problem } from "../models/problem.model.js";

class ProblemRepository {

    async createProblem (problemdata ){
          
        try{

            const problem = await Problem.create({
                title : problemdata.title ,
                description : problemdata.description,
                testcases : {}
            });

            return problem ; 

        }catch(error) {
              console.log(error);
              throw error ; 

        }
    }


    async getAllProblems (){

        try{
            const problems = await Problem.find({});
            return problems;
        }

        catch( error){
            console.log(error);
            throw error;

        }
    }
}


export { ProblemRepository }

