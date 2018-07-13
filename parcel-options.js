module.exports = {
  devOpts: {
    outDir: './dist',
    outFile: 'index.html',
    publicUrl: './',
    watch: true,
    cache: true,
    cacheDir: '.cache',
    minify: false,
    target: 'browser',
    https: false,
    logLevel: 3,
    hmrPort: 0,
    sourceMaps: true,
    hmrHostname: '',
    detailedReport: false
  },
  prodOpts: {
    outDir: './dist',
    outFile: 'index.html',
    publicUrl: './',
    watch: false,
    cache: true,
    cacheDir: '.cache',
    minify: true,
    target: 'browser',
    https: false,
    logLevel: 1,
    hmrPort: 0,
    sourceMaps: false,
    hmrHostname: '',
    detailedReport: false
  }
}
