const express=require('express');
const addMarkController = require('../controllers/addMarkController');



const router=express.Router();

router.put('/',addMarkController);

module.exports=router