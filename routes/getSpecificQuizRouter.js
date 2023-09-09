const express=require('express');
const getSpecificQuizController = require('../controllers/getSpecificQuizController');



const router=express.Router();

router.get('/',getSpecificQuizController);

module.exports=router