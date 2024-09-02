const express = require("express")
const app = express();
const router = express.Router()
const usuario_router = require("../controllers/usuario.js")

app.get("/", (req, res) => {
    res.json(usuario_router.index())
})

app.get("//:id", (req, res) => {
    res.json(usuario_router.show(req.params.id))
})

app.post("/", (req, res) => {
    const code = usuario_router.store(req.body)
    res.status(code).json()
})

app.put("/:id", (req, res) => {
    const code = usuario_router.update(req.body, req.params.id)
    res.status(code).json()
})

app.delete("/:id", (req, res) => {
    usuario_router.destroy(req.params.id)
    res.json()
})

module.exports = router