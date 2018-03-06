const mongoose            = require('mongoose')
const mongooseUV          = require('mongoose-unique-validator')

const config              = require('../config.json')
const schema              = require('./schema')

schema.postSchema.plugin(mongooseUV)

const db = {
  Post: mongoose.model('Post', schema.postSchema)
}

mongoose.Promise = global.Promise
mongoose.connect(
  config.db.uri
)

module.exports = db