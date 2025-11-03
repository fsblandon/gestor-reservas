export type Reserva = {
    id: number;
    espacioId: number;
    lugarId?: number;
    emailCliente: string;
    fechaDeReserva: string;
    horaInicio: string;
    horaFin: string;
}