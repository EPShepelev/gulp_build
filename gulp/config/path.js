import * as nodePath from "path";

const rootFolder = nodePath.basename(nodePath.resolve());
const srcFolder = "./src";
const buildFolder = "./dist";

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
    files: `${buildFolder}/files/`,
  },
  src: {
    js: `${srcFolder}/js/**/*.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.pug`,
    files: `${srcFolder}/files/**/*.*`,
    svgicons: `${srcFolder}/svgicons/*.svg`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.pug`,
    files: `${srcFolder}/files/**/*.*`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
  },
  clean: buildFolder,
  buildFolder,
  srcFolder,
  rootFolder,
  ftp: `test`, // server folder to copy project files by ftp
};
