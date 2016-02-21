'use strict';

const watcher = require('./gpio-watcher');
const player = require('./player');

watcher.start([16, 18], function (pin, oldValue, newValue) {
	if (oldValue !== undefined) {
		console.log(pin, oldValue, newValue);

		if (newValue == 0) {
			if (pin === 16) {
				player.play(__dirname + '/lowrider.mp3');
			} else if (pin === 18) {
				player.play(__dirname + '/higher.mp3');
			}
		} else {
			player.stop();
		}
	}
});

console.log('running...');
