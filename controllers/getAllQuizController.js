const quiz=require('../models/quizModel');

const getAllQuizController=async(req,res)=>{

    try {
        const result=await quiz.find({});

        if(result.length == 0){
           return res.json({msg:"No More Quizzes"})
        }
        res.json({result})

    } catch (error) {
        res.json({err:error.message})
    }
   



}

module.exports=getAllQuizController