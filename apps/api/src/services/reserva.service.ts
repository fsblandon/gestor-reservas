import prisma from '../config/db';

// helper to check time conflict: assumes horaInicio and horaFin are strings HH:mm
const isConflict = (aStart: string, aEnd: string, bStart: string, bEnd: string) => {
  return !(aEnd <= bStart || aStart >= bEnd);
};

export const createReserva = async (data: any) => {
  const { espacioId, fechaDeReserva, horaInicio, horaFin, emailCliente } = data;

  if (!espacioId || !fechaDeReserva || !horaInicio || !horaFin || !emailCliente) {
    const err: any = new Error("Faltan campos requeridos para crear la reserva");
    err.status = 400;
    throw err;
  }

  const reservas = await prisma.reserva.findMany({
    where: { espacioId: Number(espacioId), fechaDeReserva: new Date(fechaDeReserva) },
  });

  for (const r of reservas) {
    if (isConflict(r.horaInicio, r.horaFin, horaInicio, horaFin)) {
      const err: any = new Error('Conflicto de horario detectado para el espacio');
      err.status = 400;
      throw err;
    }
  }

  const fecha = new Date(fechaDeReserva);
  const weekStart = new Date(fecha);
  weekStart.setDate(fecha.getDate() - 7);

  const count = await prisma.reserva.count({
    where: {
      emailCliente,
      fechaDeReserva: { gte: weekStart }
    }
  });

  if (count >= 3) {
    const err: any = new Error('Máximo de 3 reservas por semana alcanzado para este cliente');
    err.status = 400;
    throw err;
  }

  const reserva = await prisma.reserva.create({ 
    data: {
      emailCliente,
      fechaDeReserva: new Date(fechaDeReserva),
      horaInicio,
      horaFin,
      espacio: { connect: { id: Number(espacioId) } },
    },
    include: { espacio: true },
   });
  return reserva;
};

export const findAll = async (page = 1, pageSize = 10) => {
  const skip = (page - 1) * pageSize;
  const items = await prisma.reserva.findMany({ skip, take: pageSize, orderBy: { fechaDeReserva: 'desc' } });
  const total = await prisma.reserva.count();
  return { items, total, page, pageSize };
};

export const findById = (id: number) => prisma.reserva.findUnique({ where: { id } });
export const updateReserva = (id: number, data: any) => prisma.reserva.update({ where: { id }, data });
export const deleteReserva = (id: number) => prisma.reserva.delete({ where: { id } });