const debug = process.env.NODE_ENV !== 'production'
const name = 'small-magic-project-deployment'

module.exports = {
  'process.env.BACKEND_URL': !debug ? `/${name}` : '',
}
