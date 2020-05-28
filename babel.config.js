module.exports = function (api) {
  api.cache(true)

  const presets = ['@babel/env', '@babel/preset-react']
  const plugins = ['@babel/plugin-external-helpers']
  return {
    presets,
    plugins,
  }
}
