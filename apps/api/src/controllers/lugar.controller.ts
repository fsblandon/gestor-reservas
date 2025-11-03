import { Request, Response } from "express";
import * as lugarService from "../services/lugar.service";

export const create = async (req: Request, res: Response) => {
    const created = await lugarService.createLugar(req.body);
    res.status(201).json(created);
};

export const list = async (_req: Request, res: Response) => {
    const lugares = await lugarService.findAll();
    res.json(lugares);
};

export const get = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const lugar = await lugarService.findById(id);
    if (!lugar) {
        return res.status(404).json({ message: 'Lugar not found' });
    }
    res.json(lugar);
};

export const update = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const updated = await lugarService.updateLugar(id, req.body);
    res.json(updated);
};

export const remove = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await lugarService.deleteLugar(id);
    res.status(204).send();
};