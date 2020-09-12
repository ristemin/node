const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }

// Init object

const myEmitter = new MyEmitter();

myEmitter.on('event', () => console.log('Event Fired'));

myEmitter.emit('event');