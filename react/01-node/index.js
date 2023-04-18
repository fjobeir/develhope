const { sum, multiply } = require('./calculations')
const dayjs = require('dayjs')

const a = dayjs()
const b = a.add(7, 'day')
console.log(b.format("YYYY-MM-DD"))

// download the files
// make sure to be in the correct path
// npm install | npm i