module.exports = function(grunt) {
    // Configure Grunt
    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: true
            },
            src: ['lib/**/*.js']
        }
    });

    // Load grunt plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Register tasks
    grunt.registerTask('default', ['jshint']);
};
