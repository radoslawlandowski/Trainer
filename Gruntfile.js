module.exports = function (grunt) {

    grunt.initConfig({
        copy: {
            requirejs: {
                src: './node_modules/requirejs/require.js',
                dest: './public/scripts/libs/require.js'
            }
        },

        bowercopy: {
            options: {
                clean: true
            },
            libs: {
                options: {
                    destPrefix: 'public/scripts/libs/',
                    srcPrefix: 'bower_components/'
                },
                files: {
                    'angular.min.js': 'angular/angular.min.js',
                    'angular-ui-router.min.js': 'angular-ui-router/release/angular-ui-router.min.js',
                    'angular-aria.min.js': 'angular-aria/angular-aria.min.js',
                    'angular-animate.min.js': 'angular-animate/angular-animate.min.js',
                    'angular-material.min.js': 'angular-material/angular-material.min.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-bowercopy');

    grunt.registerTask('install', ['copy:requirejs', 'bowercopy:libs']);
};