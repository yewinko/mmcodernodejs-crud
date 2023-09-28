let event = require('events');
let getevent = new event.EventEmitter();

getevent.on('start',function(name){
    console.log('My name is ',name);
})

getevent.emit('start','ye win ko');