module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      html: {
        files: [
          'other/*',
          'html/partials/*',
          'html/*'
        ],
        tasks: ['htmlmin', 'copy', 'clean']
      },
      less: {
        files: [
          'less/*'
        ],
        tasks: ['less', 'autoprefixer', 'cssmin']
      },
      js: {
        files: [
          'js/*'
        ],
        tasks: ['uglify']
      }
    },
  })
}
