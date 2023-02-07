const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')  // 載入mongoose

// 因為環境變數是在開發階段使用的  所以加入這段
// 僅在非正式環境時使用
if (process.env.NODE_ENV !== "production") {
  require('dotenv').config()
}

// added by warnning commnet
mongoose.set('strictQuery', false)


mongoose.connect(process.env.MONGODB_URI, )  //使用ODM (Object Document Mapper)映射工具 連線到mongoDB
// 原本應該是把mongoDB的那個字串直接輸入, 但是因為字串中含有帳號密碼
// 所以使用 "環境變數" 的方式來處理   


const db = mongoose.connection  //把連線內容暫存下來

// 連線失敗跟連線成功的情況告知

//db.on()：在這裡用 on 註冊一個事件監聽器，用來監聽 error 事件有沒有發生，語法的意思是「只要有觸發 error 就印出 error 訊息」。
db.on('error', () => {
  console.log('mongoDB error');
})

//db.once() - 針對「連線成功」的 open 情況，我們也註冊了一個事件監聽器，相對於「錯誤」，連線成功只會發生一次，所以這裡特地使用 once，由於 once 設定的監聽器是一次性的，一旦連線成功，在執行 callback 以後就會解除監聽器。
db.once('open', () => {    //.once 只會做一次. 因為連線只會連一次, 成功後就拿掉
  console.log('mongoDB connected');
})


app.get('/', (req, res) => {
  res.send('hello kitty')
})

app.listen(port, () => {
  console.log(`app.js in running on http://localhost:${port}`);
})