import mongoose from "mongoose" ;

const problemschema = mongoose.Schema({
    title:{
        type: String,
        required : [ true , "Title cannot be empty "]
    },
    description:{
        type: String , 
        required : [true , "description cannot be empty"]
    },
    difficulty : {
        type : String , 
        enum: ['easy' , 'medium' , 'hard'] , 
        default : 'easy'
    }, 
    testcases: [
        {
            input : {
                type : String 
            
            },
            output : {
                type : String 
            }
        }
    ],

    editorial : {
        type : String
    }
        
    
})

const  Problem = mongoose.model( 'Problem' , problemschema );

export { Problem } ;

