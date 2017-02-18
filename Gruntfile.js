module.exports = function (grunt) {

    grunt.initConfig({
        run: {
            setup: {
                options: {
                    wait: true
                },
                cmd: 'npm',
                args: ['install']
            }
        }
    });

    grunt.loadNpmTasks('grunt-run');

    grunt.registerTask('default', ['uglify']);

};