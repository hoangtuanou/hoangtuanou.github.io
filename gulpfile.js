var input_sass = "./src/sass/**/*.sass";
var input_pug = "./src/views/**/*.pug";

var output_sass = "./src/css";

var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create();
var autoprefixer = require("gulp-autoprefixer");
var cleanCSS = require("gulp-clean-css");
var plumber = require("gulp-plumber");
var pug = require("gulp-pug");
var wait = require("gulp-wait");

gulp.task("sass", function () {
  return gulp
    .src(input_sass)
    .pipe(wait(200))
    .pipe(
      plumber({
        errorHandler: function (error) {
          console.log(error.toString());
          this.emit("end");
        },
      })
    )
    .pipe(
      sass({
        includePaths: ["./src/sass"],
      })
    )
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
      })
    )
    .pipe(
      cleanCSS({
        compatibility: "ie8",
      })
    )
    .pipe(gulp.dest(output_sass))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
});

gulp.task("pug", function () {
  return gulp
    .src(input_pug)
    .pipe(
      plumber({
        errorHandler: function (error) {
          console.log(error.toString());
          this.emit("end");
        },
      })
    )
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(gulp.dest(""))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
});

gulp.task("browserSync", function () {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
});

gulp.task("watch", ["browserSync", "sass", "pug"], function () {
  gulp.watch(input_sass, ["sass"]);
  gulp.watch(input_pug, ["pug"]);
  gulp.watch("*.html", browserSync.reload);
  gulp.watch("src/js/**/*.js", browserSync.reload);

  //other watchers
});
