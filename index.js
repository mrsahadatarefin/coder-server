const express = require('express');
const cors = require('cors');
const app =express();
const port = process.env.PORT ||4000;
app.use (cors());
const data=require('./data/data.json');




app.get('/',(req,res)=>{
    res.send('news api running')
});
app.get('/allCourse',(req,res)=>{
    res.send(data)
});
app.get('/course/:id',(req,res)=>{
const id =(req.params.id);
const getSingleCourse=data?.find((p) => p.id==id);
res.send(getSingleCourse)
});

app.listen(port,()=>{
    console.log(`port running,${port}`);
})

