import replace from "gulp-replace";
import plumber from "gulp-plumber"; // обработка ошибок
import notify from "gulp-notify";
import browserSync from "browser-sync";
import newer from "gulp-newer"; // проверяет изменилась ли картинка
import ifPlugin from "gulp-if"; // условия

export const plugins = {
  replace,
  plumber,
  notify,
  browserSync,
  newer,
  ifPlugin,
};
