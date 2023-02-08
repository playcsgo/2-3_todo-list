console.log('start todoseeder.js')
const mongoose = require('mongoose')
const Todo = require('../todo')  // 載入todo model

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection
db.on('error', () => {
  console.log('mongoDB error');
})

db.once('open', () => {
  console.log('mongoDB connected');
  for (let i = 0; i < 10; i++) {
    Todo.create({
        name: `name-${i}`
      })
  }
  console.log('done');
})