
import * as reservaService from "../services/reserva.service";
import { Request, Response } from "express";

export const create = async (req: Request, res: Response) => {
    console.log("📥 Crear reserva con datos:", req.body);
    const created = await reservaService.createReserva(req.body);
    res.status(201).json(created);
};

export const list = async (req: Request, res: Response) => {
    const page = req.query.page ? Number(req.query.page) : 1;
    const pageSize = req.query.pageSize ? Number(req.query.pageSize) : 10;
    const reservas = await reservaService.findAll(page, pageSize);
    res.json(reservas);
};

export const get = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const reserva = await reservaService.findById(id);
    if (!reserva) {
        return res.status(404).json({ message: 'Reserva not found' });
    }
    res.json(reserva);
};

export const update = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const updated = await reservaService.updateReserva(id, req.body);
    res.json(updated);
};

export const remove = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await reservaService.deleteReserva(id);
    res.status(204).send();
};