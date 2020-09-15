const express=require('express');

const app= express();

app.get("/",function(req,res)
{
    res.send("<h1>Hello world very happy to host my website locally</h1>");
});

app.get("/contact",function(req,res)
{
    res.send("<h1>mob. number  :- 992255044</h1>");
});

app.get("/about",function(req,res)
{
    res.send("<h1>learning full stack development </h1>");
});

app.listen(3000,function(){
  console.log("runnig website on server 3000");
})
