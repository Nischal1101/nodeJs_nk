const fs=require('fs');
// const sync=fs.readFileSync('nischal.txt','utf-8');
// console.log(sync);
fs.readFile('nischal.txt','utf-8',(err,data)=>{
    console.log(data);
});
console.log("after request");
fs.rename('thapa/bio.txt','thapa/nk.txt',(err)=>{});

