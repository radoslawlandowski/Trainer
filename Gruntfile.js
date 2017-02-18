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
            }
        }
    });

    grunt.loadNpmTasks('grunt-run');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('install', ['run:npminstall', 'run:bowerinstall', 'copy:requirejs']);
};