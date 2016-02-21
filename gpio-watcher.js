'use strict';

const gpio = require('pi-gpio');

function start(pins, onchange) {
	let values = new Map();
	let loop = function () {
		for (let pin of pins) {
			gpio.read(pin, function (err, value) {
				if (err) {
					throw err;
				}
				let oldValue = values.get(pin);
				if (value !== oldValue) {
					onchange(pin, oldValue, value);
				}
				values.set(pin, value);
			});
		}
		setTimeout(loop, 100);
	}
	loop();
}

module.exports = {
	start: start
};

