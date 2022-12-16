const express = require('express');
const app = express()
const path = require('path')

app.listen(3030,() => {
    console.log('funciono con exito G8')
})
app.get('/', (req, res) => {
    
})