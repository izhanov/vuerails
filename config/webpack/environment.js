const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')
const pugConfig = require('./loaders/pugConfig')
const babelLoaderQuasar = require('./loaders/babel-loader-quasar')
const stylus = require('./loaders/stylus')

environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)
environment.config.merge(pugConfig)
environment.loaders.append('js', babelLoaderQuasar)
environment.loaders.append('stylus', stylus)

module.exports = environment
