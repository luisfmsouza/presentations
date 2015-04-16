module.exports = function(grunt) {
  grunt.config('browserSync', {
    build: {
      bsFiles: {
        src : '../*.css'
      },
      options: {
        server: {
          baseDir: "../"
        },
        port: 82,
        timestamps: false
      }
    }
  });
}