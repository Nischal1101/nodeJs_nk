//Read file in server using stream. 
const fs=require('fs');
const http=require('http');
const server=http.createServer();
server.on("request",(req,res)=>{
const rstream=fs.createReadStream('nischal.txt');
rstream.on("data",(chunkdata)=>{
res.write(chunkdata);
});
rstream.on('end',()=>{
res.end();
});
rstream.on('error',(err)=>{
    res.end("masalay");
    console.log(err);
});
});
server.listen(8000,"127.0.0.1");