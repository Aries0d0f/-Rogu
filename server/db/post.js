const Schema              = require('mongoose').Schema

const postSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  content: {
    type: String,
    require: true
  },
  date: {
    type: String,
    require: true
  },
  meta: Object
}, {
  collection: 'Post'
})

module.exports = postSchema