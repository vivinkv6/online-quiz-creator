const quiz=require('../models/quizModel');

const getSpecificQuizController=async(req,res)=>{

    const {language,level} = req.query;

    try {
        const result=await quiz.find({language,level});

        if(result.length == 0){
           return res.json({msg:"No More Quizzes"})
        }
        res.json({result})

    } catch (error) {
        res.json({err:error.message})
    }
   



}

module.exports=getSpecificQuizController