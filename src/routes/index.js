const {Router} = require('express');
const router = Router();

router.get('/',(req,res)=>{
    res.json({
        mensaje:'api mongoose'
    })
})
module.exports = router;
