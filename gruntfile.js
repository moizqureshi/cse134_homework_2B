module.exports = function (grunt) {
  grunt.initConfig({
    image: {
      static: {
        options: {
          pngquant: true,
          optipng: false,
          zopflipng: true,
          jpegRecompress: false,
          jpegoptim: true,
          mozjpeg: true,
          guetzli: false,
          gifsicle: true,
          svgo: true
        },
        files: {
        }
      },
      dynamic: {
        files: [{
          expand: true,
          cwd: 'public/assets/imgs/',
          src: ['**/*.{png,jpg,gif,svg}'],
          dest: 'public/assets/imgs/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-image');
};
