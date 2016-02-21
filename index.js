'use strict';

const watcher = require('./gpio-watcher');

watcher.start([16, 18], function (pin, oldValue, newValue) {
	if (oldValue !== undefined) {
		console.log(pin, oldValue, newValue);
	}
});

console.log('running...');
