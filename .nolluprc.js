// cross-env SVENCH=1 nollup
// --hot
// --port 42421
// --virtual-write public
// --watch src
// --watch '.svench/*'
// --watch node_modules/svench/tmp
// --config

module.exports = {
  hot: true,
  port: 42421,
  publicPath: 'svench',
  baseUrl: 'svench',
  watch: ['src', '.svench/*', 'node_modules/svench/tmp'],
}
