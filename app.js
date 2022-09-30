const EventEmitter = require('events');
const emitter = new EventEmitter();

//This is a listener that listens to the name of the event
//When event is raised, function is called
emitter.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

//Make sure to add a listener before an event
//This emits an event called messageLogged
emitter.emit('messageLogged', {id: 1, url: 'http://'});

emitter.on('logging', (arg) => {
    console.log('The data is:', arg);
});
emitter.emit('logging', {data: 'message'});