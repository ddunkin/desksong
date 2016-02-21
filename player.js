'use strict';

const Speaker = require('speaker');
const lame = require('lame');
const fs = require('fs');

let audioOptions = {
  channels: 2,
  bitDepth: 16,
  mode: lame.STEREO
};

let speaker;

function play(path) {
	if (speaker) {
		return;
	}
	let stream = fs.createReadStream(path);
	let decoder = new lame.Decoder();
	speaker = new Speaker(audioOptions);
	return stream.pipe(decoder).once('format', function() {
		decoder.pipe(speaker);
	});
}

function stop() {
	if (speaker) {
		speaker.end();
		speaker = undefined;
	}
}

module.exports = {
	play: play,
	stop: stop
};

