import { useState } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";

interface Props {
  onSubmit: (data: { 
    emailCliente: string; 
    fechaDeReserva: string; 
    horaInicio: string; 
    horaFin: string;
    espacioId: number;
  }) => void;
}

export default function ReservaForm({ onSubmit }: Props) {
  const [emailCliente, setEmailCliente] = useState("");
  const [fechaDeReserva, setFechaDeReserva] = useState("");
  const [horaInicio, setHoraInicio] = useState("");
  const [horaFin, setHoraFin] = useState("");
  const [espacioId, setEspacioId] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ emailCliente, fechaDeReserva, horaInicio, horaFin, espacioId });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-4 border rounded-md bg-gray-50">
      <Input label="Correo del cliente" value={emailCliente} onChange={e => setEmailCliente(e.target.value)} required />
      <Input label="Fecha de reserva" type="date" value={fechaDeReserva} onChange={e => setFechaDeReserva(e.target.value)} required />
      <div className="flex gap-2">
        <Input label="Hora inicio" type="time" value={horaInicio} onChange={e => setHoraInicio(e.target.value)} required />
        <Input label="Hora fin" type="time" value={horaFin} onChange={e => setHoraFin(e.target.value)} required />
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-medium">Espacio</label>
        <select
          value={espacioId}
          onChange={e => setEspacioId(Number(e.target.value))}
          className="border rounded-md p-2"
        >
          <option value={1}>Espacio 1</option>
          <option value={2}>Espacio 2</option>
        </select>
      </div>
      <Button type="submit">Crear reserva</Button>
    </form>
  );
}