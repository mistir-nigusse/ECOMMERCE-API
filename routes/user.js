const { verifyToken, verifyTokenAndAuthorization } = require("./verifyToken");

const router = require("express").Router();

router.put(":/id", verifyTokenAndAuthorization,(req,res)=>{

    // if(req.body.password){

    // }
      
})
 
module.exports = router;