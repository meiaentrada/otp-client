const browserSync = require('browser-sync').create();

function defaultTask() {
  browserSync.init({
    host: 'test.com.br',
    server: {
      baseDir: 'src'
    }
  })
}

exports.default = defaultTask