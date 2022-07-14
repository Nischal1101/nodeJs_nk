const fs=require('fs');
fs.writeFile('nischal.txt',"Hello guys chai pilo",(err)=>{console.log(err);
console.log('New file is created!');
});
fs.readFile('nischal.txt','UTF-8',(err,data)=>{
    console.log(data);
});