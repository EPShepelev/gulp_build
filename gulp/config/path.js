import * as nodePath from 'path'

const rootFolder = nodePath.basename(nodePath.resolve())
const srcFolder = './src'
const buildFolder = './dist'

export const path = {
  build: {
    files: `${buildFolder}/files/`,
  },
  src: {
    files: `${srcFolder}/files/**/*.*`,
  },
  watch: {
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  buildFolder,
  srcFolder,
  rootFolder
}