const ku = require("./JsKu")
const Utility = require('./Utility')

let nDate = new Date()
let nTodayYear = nDate.getFullYear()
let nTodayMonth = nDate.getMonth()
let nTodayDate = nDate.getDate()

let nTodayBeginDate = new Date(nTodayYear, nTodayMonth, nTodayDate)
console.log(nTodayBeginDate)

