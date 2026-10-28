import express from "express";
import { connectToDb } from "./database/sequelize";
import { Music } from "./models/Music";
import { creatMusic, deleteMusic, findMusicById, listAllMucics, updateMusic } from "./controllers/musicController";

const app = express();

app.use(express.json());

connectToDb()
.then(() => {
    new Music();
});

app.post("/musics", creatMusic);
app.get("/musics", listAllMucics);
app.get("/musics/:id", findMusicById);
app.put("/musics/:id", updateMusic) //atualiza tudo e o patch atualiza uma unica coisa, usado mais para atualização, por exemplo, somente o email.
app.delete("/musics/:id", deleteMusic);

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
})