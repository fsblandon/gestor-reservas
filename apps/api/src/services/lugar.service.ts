import prisma from '../config/db';

export const createLugar = async (data: { nombre: string; ubicacion: string }) => {
  return prisma.lugar.create({ data });
};

export const findAll = async () => prisma.lugar.findMany();
export const findById = async (id: number) => prisma.lugar.findUnique({ where: { id } });
export const updateLugar = async (id: number, data: any) => prisma.lugar.update({ where: { id }, data });
export const deleteLugar = async (id: number) => prisma.lugar.delete({ where: { id } });