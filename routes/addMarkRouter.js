const express=require('express');
const addMarkController = require('../controllers/addMarkController');



const router=express.Router();

router.post('/',addMarkController);

module.exports=router