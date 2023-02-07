const mongoose = require('mongoose')
const Schema = mongoose.Schema
const todoSchema = new Schema({   //new是建構子 現在還不清楚沒關係
  name: {
    type: String, //資料型態為字串
    require: true //這是個必填欄位
  },
  done: {
    type: Boolean
  }
})
// 使用 module.exports做輸出
// 輸出時使用 Todo作為這放model的命名, 外面就可以使用Todo來做物件的操作
module.exports = mongoose.model('Todo', todoSchema)

