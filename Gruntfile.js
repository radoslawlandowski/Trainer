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
                clean: false
            },
            libs: {
                options: {
                    destPrefix: 'public/scripts/libs/',
                    srcPrefix: 'bower_components/'
                },
                files: {
                    'angular.min.js': 'angular/angular.min.js',
                    'angular-ui-router.min.js': 'angular-ui-router/release/angular-ui-router.min.js',
                    'angular-animate.min.js': 'angular-animate/angular-animate.min.js',
                    'angular-mocks.js': 'angular-mocks/angular-mocks.js',
                    'ui-bootstrap-csp.css': 'angular-bootstrap/ui-bootstrap-csp.css',
                    'ui-bootstrap-tpls.min.js': 'angular-bootstrap/ui-bootstrap-tpls.min.js',
                    'bootstrap.css': 'bootstrap/dist/css/bootstrap.css',
                    'jquery.min.js': 'jquery/dist/jquery.min.js'
                }
            },
            fonts: {
                options: {
                    destPrefix: 'public/scripts/fonts/',
                    srcPrefix:'bower_components/bootstrap/fonts/'
                },
                files: {
                    'glyphicons-halflings-regular.eot': 'glyphicons-halflings-regular.eot',
                    'glyphicons-halflings-regular.svg': 'glyphicons-halflings-regular.svg',
                    'glyphicons-halflings-regular.ttf': 'glyphicons-halflings-regular.ttf',
                    'glyphicons-halflings-regular.woff': 'glyphicons-halflings-regular.woff',
                    'glyphicons-halflings-regular.woff2': 'glyphicons-halflings-regular.woff2'
                }
            }
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: false
            },
            singleRun: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('install', ['copy:requirejs', 'bowercopy:libs', 'bowercopy:fonts']);
};