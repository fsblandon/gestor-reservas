import prisma from '../config/db';

export const createEspacio = async (data: any) => prisma.espacio.create({ data });
export const findAll = async () => prisma.espacio.findMany();
export const findById = async (id: number) => prisma.espacio.findUnique({ where: { id } });
export const updateEspacio = async (id: number, data: any) => prisma.espacio.update({ where: { id }, data });
export const deleteEspacio = async (id: number) => prisma.espacio.delete({ where: { id } });