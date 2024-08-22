require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.static('./public'));
app.use(express.json());
const port = process.env.PORT || 5000
const mongoDB = require('./db')
mongoDB();
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
 
    );
    next();
})

app.use('/api',require('./Routes/Createuser'))
app.use('/api',require('./Routes/DisplayData'))
app.use('/api',require('./Routes/OrderData'))
app.use('/',(req,res)=>{
    res.send("Hello Devesh");
})
app.listen(port,()=>{
    console.log(`Server is listening on ${port}`)
})