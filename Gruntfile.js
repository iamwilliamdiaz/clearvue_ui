module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'app/**/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>', 'app/**/*.html', 'app/**/*.css'],
            tasks: ['jshint','bsReload:css']
        },
        cssmin: {
            target: {
                files: [
                    {
                        expand: true,
                        cwd: 'app/assets/css',
                        src: ['*.css', '!*.min.css'],
                        dest: 'dist/css',
                        ext: '.min.css'
                    }
                ]
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'app/css/*.css',
                        'app/*.html',
                        'app/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './',
                    logConnections: true
                }
            }
        },
        bsReload: {
            css: 'app/css/*.css'
        },
        prepare_build: {
            build : {
                options: {
                    versionFile: 'app.js',
                    versionMatch: /(\d+\.\d+\.\d+)/,
                    increaseMinor: true,
                    //
                    env : true,
                    envFile : 'VERSION.js',
                    envMatch : /development/g,
                    envName : 'production',
                    //
                    commit: false,
                    commitMessage: 'New version',
                    commitFiles: '.',
                    //
                    tag: false,
                    tagName: 'V',
                    tagMessage: 'New release'
                }
            },
            update : {
                options: {
                    versionFile: 'public/app.js',
                    versionMatch: /(\d+\.\d+\.\d+)/,
                    increasePatch: true,
                    //
                    env : true,
                    envFile : 'public/env.js',
                    envMatch : /development/g,
                    envName : 'testing',
                    //
                    commit: false,
                    commitMessage: 'Small update',
                    commitFiles: '.',
                    //
                    tag: false,
                    tagName: 'V',
                    tagMessage: 'Small fixes'
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-prepare-build');

    grunt.registerTask('default', ['browserSync', 'watch']);


};