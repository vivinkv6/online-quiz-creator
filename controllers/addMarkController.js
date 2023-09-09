const user=require('../models/userModel');

const addMarkController=async(req,res)=>{

    const {email,quizResult}=req.body;

    const updateUserProfile=await user.updateOne({email:email},{quizResult:quizResult});

    if(!updateUserProfile){
       return res.json({err:"Profile Update Failed"})
    }
    res.json({msg:"Update Profile Successfully"});

}

module.exports=addMarkController