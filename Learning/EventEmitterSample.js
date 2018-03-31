var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1(){
	console.log('LISTENER listener1 Excute...');
}
var listener2 = function listener2(){
	console.log('LISTENER listener2 Excute...');
}

eventEmitter.addListener('connection', listener1);
eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " 个监听器监听连接事件.");

eventEmitter.emit('connection');

eventEmitter.removeListener('connection',listener1);
console.log("listener1 不再受监听.");

eventEmitter.emit('connection');
eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " 个监听器监听连接事件");

console.log("程序执行完毕");