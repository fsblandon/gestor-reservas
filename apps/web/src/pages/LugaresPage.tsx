import { useLugares } from "../hooks/useLugares";
import { LugarCard } from "../components/LugarCard";
import Loader from "../components/UI/Loader";

export default function LugaresPage() {
  const { lugares, isLoading } = useLugares();

  if (isLoading) return <Loader />;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Lugares</h1>
      {lugares?.length === 0 && <p>No hay lugares registrados.</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {lugares?.map((lugar: any) => (
          <LugarCard key={lugar.id} {...lugar} />
        ))}
      </div>
    </div>
  );
}
