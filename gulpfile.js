const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const del = require("del");

gulp.task("clean", function () {
  return del(["./assets/style/main.css"]);
});

gulp.task("styles", () =>
  gulp
    .src("./assets/scss/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS({ compatibility: "ie11" }))
    .pipe(gulp.dest("./assets/style"))
);

gulp.task("watch", () => {
  gulp.watch("./assets/scss/*.scss", (done) => {
    gulp.series(["clean", "styles"])(done);
  });
});

gulp.task("default", gulp.series(["clean", "styles"]));
