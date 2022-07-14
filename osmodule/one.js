const os=require('os');
// import os from 'os';
console.log(os.arch());

const memory=os.freemem();
console.log(memory/1024/1024/1024);
const total=os.totalmem();
console.log(total/1024/1024/1024);
console.log(os.hostname());
console.log(os.release());
console.log(__dirname);