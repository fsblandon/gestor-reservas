
export interface Espacio {
    id: number;
    nombre: string;
    descripcion?: string;
    referencia?: string;
    capacidad: number;
}

export function EspacioCard({
    nombre,
    capacidad,
    descripcion
}: Espacio) {
  return (
    <div className="p-4 border rounded-md hover:shadow-md transition bg-white">
      <h2 className="text-lg font-semibold mb-1">{nombre}</h2>
      <p className="text-sm text-gray-600 mb-2">Capacidad: {capacidad}</p>
      {descripcion && <p className="text-sm text-gray-500">{descripcion}</p>}
    </div>
  );
}