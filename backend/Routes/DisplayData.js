const express = require("express");
const router = express.Router();
// console.log(global.food_items)
// console.log('devesh')

router.post('/foodData',(req,res)=>{
    try {
        // console.log(global.food_items);
        res.send([global.food_items,global.foodCategory])
        // console.log(global.food)
        // console.log(global.food_Category)
        // res.send([global.food,global.food_Category])
    } catch (error) {
        console.error(error.message)  
        res.send("server error")
        
    }
})


module.exports = router;
