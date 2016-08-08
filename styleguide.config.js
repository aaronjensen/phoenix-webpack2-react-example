const path = require('path')

module.exports = {
  title: 'My Style Guide',
  components: './web/static/js/components/**/*.js',
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.js$/, '.examples.md')
  },
  skipComponentsWithoutExample: true,
  updateWebpackConfig: function(webpackConfig, env) {
    // Your source files folder or array of folders, should not include node_modules
    let dir = path.join(__dirname, 'web/static/js/components');
    webpackConfig.module.loaders.push(
      // Babel loader will use your project’s .babelrc
      {
        test: /\.jsx?$/,
        include: dir,
        loader: 'babel'
      }
    )

    return webpackConfig
  },
}
