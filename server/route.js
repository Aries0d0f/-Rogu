const route               = new (require('koa-router'))()
const model               = require('./model')

route.use('/api/post', model.post.routes(), model.post.allowedMethods())

module.exports = route
