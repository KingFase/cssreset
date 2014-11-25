module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
        dist: {
            options: {
                keepSpecialComments: '*'
            },
            files: {
                'src/reset.min.css': 'src/reset.css'
            }
        }
    }
  });

  // Load cssmin
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task
  grunt.registerTask('default', ['cssmin']);

};