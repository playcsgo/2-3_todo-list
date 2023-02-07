const mongoose = require('mongoose')
const Schema = mongoose.Schema
const todoSchema = new Schema({
  name: {
    type: String, //資料型態為字串
    require: true //這是個必填欄位
  },
  done: {
    type: Boolean
  }
})

module.exports = mongoose.model('Todo', todoSchema)
