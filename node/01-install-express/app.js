const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/posts', (req, res) => {
    res.send('You are in posts')
})
app.post('/tweet', (req, res) => {
    res.send('You are trying to create a post')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})