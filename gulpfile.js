var gulp = require('gulp')
var less = require('gulp-less')
var plumber = require('gulp-plumber')
const gulpWebpack = require('gulp-webpack')
gulp.task('watch', function() {
    gulp.watch("./less/**/*", ['less'])
});

gulp.task('less', function() {
    return gulp.src(['./less/index.less'])
        .pipe(plumber())
        .pipe(less())
        .pipe(gulp.dest("./styles"))
});

//测试环境
gulp.task('test', () => {
  return gulp.src('./test/main.js')
  .pipe(gulpWebpack({
    resolve: {
      alias: {
        'vue': 'vue/dist/vue.js'
      }
    },
    entry: ['./test/main.js'],
    output: {
      filename: 'test.js'
    },
    module: {
     loaders: [
       { test: /\.js$/, loader: 'babel-loader', exclude: '/node_modules' },
       { test: /\.vue$/, loader: 'vue' },
     ]
    },
    babel: {
      presets: ['es2015']
    }
  }))
  .pipe(gulp.dest("test"))
})

gulp.task('default', ['watch', 'less'])
