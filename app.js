const express = require('express');
const app = express()
const path = require('path')


app.get('/', (req, res) => {
    let indexPath = path.resolve(__dirname,'./views/index.html')
        res.sendFile(indexPath)
})

app.get('/babbage', (req, res) => {
    let babbagePath = path.resolve(__dirname,'./views/babbage.html')
        res.sendFile(babbagePath)
})

app.get('/berners-lee', (req, res) => {
    let bernersleePath = path.resolve(__dirname,'./views/berners-lee.html')
        res.sendFile(bernersleePath)
})

app.get('/clarke', (req, res) => {
    let clarkePath = path.resolve(__dirname,'./views/clarke.html')
        res.sendFile(clarkePath)
})

app.get('/hamilton', (req, res) => {
    let indexPath= path.resolve(__dirname,'./views/hamilton.html')
        res.sendFile(hamiltonPath)
})

app.get('/hopper', (req, res) => {
    let indexPath= path.resolve(__dirname,'./views/hopper.html')
        res.sendFile(hopperPath)
})

app.get('/lovelace', (req, res) => {
    let indexPath= path.resolve(__dirname,'./views/lovelace.html')
        res.sendFile(lovelacePath)
})

app.get('/turing', (req, res) => {
    let indexPath= path.resolve(__dirname,'./views/turing.html')
        res.sendFile(turingPath)
})


app.listen(3030,() => {
    console.log('funciono con exito G8')
})
app.use(express.static('public'));