const express=require('express');
const quizController = require('../controllers/quizController');

const router=express.Router();

router.post('/',quizController);

module.exports=router