const express=require('express');
const getAllQuizController = require('../controllers/getAllQuizController');


const router=express.Router();

router.get('/',getAllQuizController);

module.exports=router