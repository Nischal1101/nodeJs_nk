const fs=require('fs');
fs.writeFileSync('bio.txty',"hi i am me");
fs.renameSync('bio.txty','bio.txt');
const read=fs.readFileSync('bio.txt');
console.log(read.toString());
