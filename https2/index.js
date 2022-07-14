const fs=require('fs');
const http=require('http');
const { url } = require('inspector');
const server=http.createServer((req,res)=>{
    if(req.url=='/home')
    {
        res.end("hi this is home page of Nischal");
    }
    else if (req.url=='/about')
    {
        res.end("hi this is about page of Nischal");

    }
    else if(req.url=='/myapi'){
fs.readFile(`${__dirname}/nnn.JSON`,"utf-8",(err,data)=>{
res.end(data);
console.log(data);
});

    }


    else {
        res.end("chala ja bsdk");
    }

    console.log('My server is starting ');
});
server.listen(8000,"127.0.0.1");
