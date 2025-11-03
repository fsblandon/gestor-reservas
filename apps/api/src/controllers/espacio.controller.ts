import { Request, Response } from 'express';
import * as espacioService from '../services/espacio.service';

export const create = async (req: Request, res: Response) => {
  const created = await espacioService.createEspacio(req.body);
  res.status(201).json(created);
};

export const list = async (_req: Request, res: Response) => {
  const espacios = await espacioService.findAll();
  res.json(espacios);
};

export const get = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const espacio = await espacioService.findById(id);
  if (!espacio) {
    return res.status(404).json({ message: 'Espacio not found' });
  }
  res.json(espacio);
};

export const update = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const updated = await espacioService.updateEspacio(id, req.body);
  res.json(updated);
};

export const remove = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  await espacioService.deleteEspacio(id);
  res.status(204).send();
};