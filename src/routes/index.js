const express=require('express');
const router=express.Router();

const {getArrays}=require('../controllers/array');
const{getByTitle,getByAge}=require('../controllers/randomuser');

router.get('/array',getArrays);
router.get('/user/title',getByTitle);
router.get('/user/age',getByAge);


module.exports=router;