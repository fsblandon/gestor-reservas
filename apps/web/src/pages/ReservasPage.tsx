import { useReservas } from "../hooks/useReservas";
import ReservaForm from "../components/ReservaForm";
import Loader from "../components/UI/Loader";
import Button from "../components/UI/Button";

export default function ReservasPage() {
  const { reservas, isLoading, createReserva, deleteReserva } = useReservas();

  if (isLoading) return <Loader />;

  const handleSubmit = async (data: any) => {
    await createReserva(data);
  };
  console.log("🔍 Reservas:", reservas);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Reservas</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* FORM */}
        <ReservaForm onSubmit={handleSubmit} />

        {/* LISTADO */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Reservas existentes</h2>
          {reservas?.length === 0 && <p>No hay reservas registradas.</p>}

          <ul className="divide-y border rounded-md">
            {reservas?.map((reserva: any) => (
              <li key={reserva.id} className="p-3 flex justify-between items-center">
                <div>
                  <p className="font-medium">{reserva.emailCliente}</p>
                  <p className="text-sm text-gray-600">
                    {reserva.fechaDeReserva} — {reserva.horaInicio} a {reserva.horaFin}
                  </p>
                </div>
                <Button
                  className="bg-red-500 hover:bg-red-600"
                  onClick={() => deleteReserva(reserva.id)}
                >
                  Eliminar
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
