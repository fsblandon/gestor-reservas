export interface Lugar {
    id: number;
    nombre: string;
    ubicacion: string;
}

export function LugarCard({
    nombre,
    ubicacion
}: Lugar) {
  return (
    <div className="p-4 border rounded-md shadow hover:shadow-md transition">
      <h2 className="font-semibold text-lg">{nombre}</h2>
      <p className="text-sm text-gray-600">{ubicacion}</p>
    </div>
  );
}