/*
 * grunt-open-server
 * 
 *
 * Copyright (c) 2014 Дмитрий Цветцих
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	grunt.config.merge({'open-server': {
		start:{},
		restart: {},
		stop: {},
		status: {}
	}});

	var exec = require('child_process').exec
		, path = require('path')
		;

	var isRunning = function(cb) {

		exec('tasklist /NH /FI "IMAGENAME eq Open Server.exe"', {}, function(e, stdout){
			if (e) {
				cb(false, e);
				return;
			}

			if (stdout) {
				cb( stdout.indexOf("Open Server.exe") !== -1 );
			}
		});

	};

	grunt.registerMultiTask('open-server', 'The best Grunt plugin ever.', function() {
		var options = this.options({
			path: null
		});

		if (!options.path) {
			grunt.log.error("You need set " + 'path'.red + " to Open Server");
			return false;
		}

		var done = this.async()
			, command = '"' + path.normalize(options.path) + '" /' + this.target
			;

		isRunning(function(status) {
			if (!status) {
				grunt.log.error("You need " + 'run'.red + " Open Server");
				done(false);
				return;
			}

			if (this.target == "status") {
				done();
				return;
			}

			exec(command, {}, function(err){
				if (err) {
					grunt.log.error(err);
					done(false);
				}

				done();
			});
		}.bind(this));
	});
};