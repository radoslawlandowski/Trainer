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
                    'angular-moment.min.js': 'angular-moment/angular-moment.min.js',
                    'angular-chart.min.js': 'angular-chart/angular-chart.min.js',
                    'c3.min.js': 'c3/c3.min.js',
                    'c3.min.css': 'c3/c3.min.css',
                    'd3.min.js': 'd3/d3.min.js'
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

        shell: {
            e2e: {
                options: {
                    stdout: true
                },
                command: 'powershell -command "& {. ./scripts/PowershellUtils.ps1; Run-UITests}"'
            }
        },

        run: {
            options: {
            // Task-specific options go here. 
        },
            start_webdriver: {
                options: {
                    wait: false
                },
                cmd: 'webdriver-manager',
                args: [
                    'start'
                ]
            },
            start_app: {
                options: {
                    wait: false,
                    ready: /Application is started!*/
                },
                cmd: '',
                args: [
                    
                    // powershell -command "& { . <path>\script1.ps1; My-Func }"
                ]
            },
            stop_app: {
                options: {
                    wait: true
                },
                cmd: 'fuser',
                args: [
                    '-k',
                    '-s',
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
    grunt.loadNpmTasks('grunt-run');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('install', ['copy:requirejs', 'bowercopy:libs', 'bowercopy:fonts']);
    grunt.registerTask('e2e', ['shell:e2e']);
};