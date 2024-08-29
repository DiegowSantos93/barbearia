const express = require("express")
const cep_endereco = require("./middlewares/cep_endereco.js")
const app = express()
const port = 5600

app.use(express.json())

app.use((req, res, next) => {
    console.log("middleware2")
    next()
})

app.post("/barbearia", cep_endereco, (req, res) => {
    console.log("POST barbearia")
    res.json(req.body)
})

app.listen(port, () => {
    console.log('Iniciado na porta ' + port)
})