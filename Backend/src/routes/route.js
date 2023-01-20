const express =require('express') ;
const route = express.Router();
const { createQuery } =require('../controllers/queryController.js') ;



//--------------FEATURE I - User-Query---------------->

route.post('/query', createQuery);  




module.exports=route