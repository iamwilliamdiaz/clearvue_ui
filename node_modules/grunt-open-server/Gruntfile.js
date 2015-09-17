/*
 * grunt-open-server
 * 
 *
 * Copyright (c) 2014 Дмитрий Цветцих
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        'package.json'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    "open-server": {
    	options: {
    		path: "C:\\develop\\tools\\OpenServer/Open Server.exe"
    	}
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint']);

};
