import { createServer } from "node:http"
import { readFileSync } from "node:fs"
import path from "node:path"

const caminhoProjeto = path.resolve();

const paginaHome = path.join(caminhoProjeto, "index.html")

const server = createServer((req, res) => {
    console.log("Alterado :D", req.method, req.url)

    const pagina = readFileSync(paginaHome, "utf-8")

    res.end(pagina)
})

server.listen(
    3001,
    () => console.log("Servidor rodando em http://localhost:3001")
)