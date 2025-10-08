import { sanitizeMarkdownContent } from "../utils/markdownSanitizer.js";

class ProblemService {
    constructor( ProblemRepository) {
        this.ProblemRepository = ProblemRepository ;
    }

    async createProblem (problemdata) {
        try{
         
            problemdata.description = sanitizeMarkdownContent(problemdata.description);

            const problem = await this.ProblemRepository.createProblem(problemdata);

            return problem ; 


        }catch(error){

           console.log(error);
           throw error ;

        }

    }

    async getAllProblems( ){
      
        const problem = await this.ProblemRepository.getAllProblems();
        return problem ;

    }
}


export {ProblemService}