# grunt-open-server

> Плагин для старта / остановки / перезапуска [Open Server](http://open-server.ru)

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-open-server --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-open-server');
```

## The "open-server" task

### Overview
In your project's Gruntfile, add a section named `open-server` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  "open-server": {
    options: {
      path: "path/to/open-server"
    }
  },
});
```

### Tasks

#### start
Task : `open-server:start`

Используется для запуска Open Server

#### stop
Task : `open-server:stop`

Используется для остановки Open Server

#### restart
Task : `open-server:restart`

Используется для перезапуска Open Server

#### status
Task : `open-server:status`

Is Open Server running?

### Options

#### options.path
Type: `String`
Default value: `null`

Path to Open Server executable file.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
