'use strict'


module.exports = function (grunt) {

    // Load grunt tasks
    require('load-grunt-tasks')(grunt);

    // Grunt configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            css: {
                src: [
                    'views/css/*'
                ],
                dest: 'dev/views/css/combined.css'
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dev/img'
                },
                    {
                        expand: true,
                        cwd: 'views/images/',
                        src: ['**/*.{png,jpg,gif}'],
                        dest: 'dev/views/images/'
                }]
            }
        },
        uglify: {
            options: {
                report: 'gzip'
            },
            my_target: {
                files: {
                    'dev/views/js/main.js': 'views/js/main.js',
                    'dev/js/perfmatters.js' : 'js/perfmatters.js'
                }
            }

        },
        cssmin: {
            target: {
                files: {
                    'dev/views/css/combined.css': 'dev/views/css/combined.css',
                    'dev/css/style.css' : 'css/style.css',
                    'dev/css/print.css' : 'css/print.css'
                }
            }
        },
        minifyHtml: {
            target: {
                files: {
                    'dev/views/pizza.min.html': 'views/pizza.html'
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-minify-html');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');


    grunt.registerTask('default', ['newer:concat', 'newer:imagemin', 'uglify', 'cssmin', 'minifyHtml']);
};