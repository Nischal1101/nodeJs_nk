const fs=require('fs');
const obj={
name:'nischal',
class:2,
address:"pathari-sanischare",
channel:"onlyCodes",
};
const jsn=JSON.stringify(obj);
fs.writeFile('json1.JSON',jsn,(err)=>{
});
fs.readFile("json1.JSON","utf-8",(err,data)=>{
    const original=JSON.parse(data);
console.log(data);
console.log(original);
});