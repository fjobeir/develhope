const { sum, multiply } = require('./calculations')
const dayjs = require('dayjs')

const a = dayjs()
const b = a.add(7, 'day')
console.log(b.format("YYYY-MM-DD"))