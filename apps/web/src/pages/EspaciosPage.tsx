import { useEspacios } from "../hooks/useEspacios";
import { EspacioCard } from "../components/EspacioCard";
import Loader from "../components/UI/Loader";

export default function EspaciosPage() {
  const { espacios, isLoading } = useEspacios();

  if (isLoading) return <Loader />;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Espacios</h1>
      {espacios?.length === 0 && <p>No hay espacios registrados.</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {espacios?.map((espacio: any) => (
          <EspacioCard key={espacio.id} {...espacio} />
        ))}
      </div>
    </div>
  );
}
