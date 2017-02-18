module.exports = function (grunt) {

    grunt.initConfig({
        run: {
            npminstall: {
                options: {
                    wait: true
                },
                cmd: 'npm',
                args: ['install']
            },
            bowerinstall: {
                options: {
                    wait: true
                },
                cmd: 'bower',
                args: ['install']
            }
        },
        copy: {
            requirejs: {
                src: './node_modules/requirejs/require.js',
                dest: './public/scripts/libs/require.js'
            },
            bowerComponents: {
                options: {
                    wait: true
                },

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
                    'angular.min.js': 'angular/angular.min.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-run');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-bowercopy');

    grunt.registerTask('install', ['run:npminstall', 'bowercopy:libs', 'copy:requirejs']);
};