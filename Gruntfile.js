module.exports = function(grunt) {

  // Modules
  grunt.loadNpmTasks('grunt-init');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('bootcamp');

  // Grunt Tasks
  grunt.initConfig({

    // Sass
    sass: {
      test: {
        options: {
          style: 'expanded',
          loadPath: './node_modules/bootcamp/dist'
        },
        files: {
          'tmp/results.css': 'specs/main.scss'
        }
      }
    },

    // Bootcamp
    bootcamp: {
      test: {
        files: {
          src: ['tmp/results.css']
        }
      }
    },

    // Watch
    watch: {
      dist: {
        files: ['./**/*.scss'],
        tasks: ['sass', 'bootcamp']
      }
    }
  });

  // Tasks
  grunt.registerTask('default', ['sass', 'bootcamp', 'watch']);
  grunt.registerTask('test',    ['sass', 'bootcamp']);
};
