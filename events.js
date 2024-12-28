const EventEmitter = require('events');
const emitter = new EventEmitter();

// Task 1: Simulate a Subscription Feature
emitter.on('subscribe', () => {
    console.log('You are now subscribed to our channel.');
});
emitter.emit('subscribe');

// Task 2: Remove Event Handler and Observe
const subscribeHandler = () => {
    console.log('You are now subscribed to our channel.');
};

emitter.on('subscribe', subscribeHandler);
emitter.emit('subscribe');

emitter.removeListener('subscribe', subscribeHandler);
emitter.emit('subscribe'); // This will not trigger the handler

// Task 3: Set Maximum Number of Listeners
console.log('Current Max Listeners:', emitter.getMaxListeners());
emitter.setMaxListeners(5);
console.log('New Max Listeners:', emitter.getMaxListeners());


