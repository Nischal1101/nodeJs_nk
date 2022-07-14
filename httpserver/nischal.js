const fs = require('fs');
const http= require('http');
const server=http.createServer((req,res)=>{
// console.log(req.url);
if(req.url=='/'){

    res.end('Hello from the home page');
}
else if(req.url=='/about'){

    res.end('hello from the about page');
}
else if (req.url =='/contact'){

    res.end('hello from the contact page');
}
else if(req.url =='/userapi'){
fs.readFile(`${__dirname}/api/myapi.jSON`,'utf-8',(err,data)=>{
console.log(data);
res.end(data);
});
}
else {
    res.writeHead(404,{"Content-type":"html/text"}) ;  
    res.end('Error 404');

}
});
server.listen(7000,"127.0.0.1",()=>{
    console.log("port is starting ");
});
