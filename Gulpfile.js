var createBlueKit = require('react-bluekit/lib/createBlueKit').default

console.log(createBlueKit)

createBlueKit({
  // your directory where components are located
  baseDir: `${__dirname}/web/static/js`,
  // relative paths from base dir where to look for components
  paths: ['./components/']
});
