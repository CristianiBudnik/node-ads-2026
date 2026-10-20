import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path"

const caminhoAtual = path.resolve();

const nomeArquivo = "exemplo.php"

const caminhoArquivo = path.join(caminhoAtual, nomeArquivo)

writeFileSync(caminhoArquivo, "Esse é o conteúdo do arquivo")

const arquivo = readFileSync(caminhoArquivo, "utf-8")

console.log(arquivo)