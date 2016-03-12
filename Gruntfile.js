
'use strict'

var ngrok = require('ngrok');

module.exports = function (grunt) {

    // Load grunt tasks
    require('load-grunt-tasks')(grunt);

    // Grunt configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        pagespeed: {
            options: {
                nokey: true,
                locale: "en_GB",
                threshold: 40
            },
            local: {
                options: {
                    strategy: "desktop"
                }
            },
            mobile: {
                options: {
                    strategy: "mobile"
                }
            }
        },
        concat: {
            css: {
                src: [
                    'views/css/*'
                ],
                dest: 'views/build/combined.css'
            },
            js: {
                src: [
          'js/*'
        ],
                dest: 'build/combined.js'
            },
            js_views: {
                src: [
                    'views/js/*'
                ],
                dest: 'views/build/combined.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-newer');
    // Register customer task for ngrok
    grunt.registerTask('psi-ngrok', 'Run pagespeed with ngrok', function () {
        var done = this.async();
        var port = 8080;

        ngrok.connect(port, function (err, url) {
            if (err !== null) {
                grunt.fail.fatal(err);
                return done();
            }
            grunt.config.set('pagespeed.options.url', url);
            grunt.task.run('pagespeed');
            done();
        });
    });

    // Register default tasks
    grunt.registerTask('default', ['newer:concat', 'psi-ngrok']);
}