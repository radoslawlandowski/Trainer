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
                    'jquery.min.js': 'jquery/dist/jquery.min.js',
                    'moment.min.js': 'moment/min/moment.min.js',
                    'angular-moment.min.js': 'angular-moment/angular-moment.min.js'
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
        },

//        html2js: {
//            options: {
//               base: 'public/',
//                amd: true
//            },
//            main: {
//                src: ['public/scripts/application/main/**/*.html'],
//               dest: 'public/scripts/application/main/templates/templates-main.js'
//            },
//            athlete: {
//                src: ['public/scripts/application/athlete/**/*.html'],
//                dest: 'public/scripts/application/athlete/templates/templates-athlete.js'
//           },
//            shared: {
//                src: ['public/scripts/application/shared/**/*.html'],
//                dest: 'public/scripts/application/shared/templates/templates-shared.js'
//            }
//        },

        run: {
            options: {
            // Task-specific options go here. 
            },
            start_app: {
                options: {
                    wait: false,
                    ready: /Application is started!*/
                },
                cmd: 'npm',
                args: [
                    'start'
                ]
            },
            stop_app: {
                options: {
                    wait: true
                },
                cmd: 'fuser',
                args: [
                    '-k',
                    '3000/tcp'
                ]
            },
            run_protractor: {
                options: {
                    wait: true
                },
                cmd: 'protractor',
                args: [
                    './public/scripts/tests/e2e/tests/conf.js'
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-run');

    grunt.registerTask('install', ['copy:requirejs', 'bowercopy:libs', 'bowercopy:fonts']); //, 'html2js'
    grunt.registerTask('e2e-tests', ['run:start_app', 'run:run_protractor', 'run:stop_app']);
};