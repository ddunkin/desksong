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
	let stream = fs.createReadStream(path);
	let decoder = new lame.Decoder();
	return stream.pipe(decoder).once('format', function() {
		speaker = new Speaker(audioOptions);
		decoder.pipe(speaker);
	});
}

function stop() {
	speaker.end();
	speaker = undefined;
}

module.exports = {
	play: play,
	stop: stop
};

