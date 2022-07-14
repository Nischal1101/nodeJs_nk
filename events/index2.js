const events=require('events');
const EventEmitter=new events.EventEmitter();
EventEmitter.on('speak',()=>{
console.log("I am speaking");
});
EventEmitter.emit('speak');
