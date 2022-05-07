import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import cleanCss from "gulp-clean-css"; // сжатие css
import webpCss from "gulp-webpcss"; // вывод wepb изображений
import autoprefixer from "gulp-autoprefixer"; // автопрефиксер для кроссбраузерности
import groupCssMediaQueries from "gulp-group-css-media-queries"; // группировка медиазапросов

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp
    .src(app.path.src.scss, {
      sourcemaps: true,
    })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "SCSS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(app.plugins.replace(/@img\//g, "../img/"))
    .pipe(
      sass({
        outputStyle: "expanded",
      })
    )
    .pipe(groupCssMediaQueries())
    .pipe(
      webpCss({
        webpClass: ".webp",
        noWebpClass: ".no-webp",
      })
    )
    .pipe(
      autoprefixer({
        grid: true,
        overrideBrowserslist: ["last 3 version"],
        cascade: true,
      })
    )
    .pipe(app.gulp.dest(app.path.build.css)) // получаем несжатую копию итогового файла стилей
    .pipe(cleanCss())
    .pipe(
      rename({
        extname: ".min.css",
      })
    )
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browserSync.stream());
};
