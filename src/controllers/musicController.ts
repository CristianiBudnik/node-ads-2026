import { Request, Response } from "express"
import { Music } from "../models/Music";


export async function creatMusic(request: Request, response: Response) {
    const data = request.body;

    const newMusic = await Music.create({
        title: data.title,
        durationInSeconds: data.durationInSeconds,
        releaseYear: data.releaseYear,
        photoUrl: data.protoUrl
    });

    return response.json(newMusic);
}

export async function listAllMucics(request:Request, response: Response) {
    const musics = await Music.findAll();
    return response.json(musics);
}

export async function findMusicById(request: Request, response: Response) {
    try {

        const data = request.params;

        const music = await Music.findByPk(Number(data.id));

        if (!music) {
            return response.sendStatus(404);
        }
        return response.json(music);
    } catch {
        return response.status(500).json({ message: "Erro interno no servidor!" })
    }
}

export async function updateMusic(request:Request, respose: Response) {
    const data = request.body;
    const params = request.params;

    const music = await Music.findByPk(Number(params.id));

    if (!music) {
        return respose.status(404).json({ message: "Musica não encontrada."})
    }

    music.title = data.title;
    music.durationInSeconds = data.durationInSeconds;
    music.releaseYear = data.releaseYear;
    music.photoUrl = data.photoUrl;

    await music.save();

    return respose.json(music);
}

export async function deleteMusic(request:Request, respose: Response){
    const params = request.params;
    const id = Number(params.id);

    const music = await Music.findByPk(id);

    if(!music) {
        return respose.status(404).json({ message: "Musica não encontrada" })
    }

    await music.destroy();

    return respose.sendStatus(204);
}