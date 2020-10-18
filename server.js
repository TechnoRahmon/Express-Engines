 
const express = require('express')
require('pug')

const app = express(); 
const PORT = 3000


app.set('view engine','pug')
app.use('/',express.static('public'))
app.get('/',(req,resp)=>{
    resp.render('content')
})
app.listen(PORT)