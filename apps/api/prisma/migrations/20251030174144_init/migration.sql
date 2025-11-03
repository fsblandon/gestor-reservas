-- CreateTable
CREATE TABLE "Lugar" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "ubicacion" TEXT NOT NULL,

    CONSTRAINT "Lugar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Espacio" (
    "id" SERIAL NOT NULL,
    "lugarId" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "referencia" TEXT,
    "capacidad" INTEGER NOT NULL,
    "descripcion" TEXT,

    CONSTRAINT "Espacio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reserva" (
    "id" SERIAL NOT NULL,
    "espacioId" INTEGER NOT NULL,
    "lugarId" INTEGER,
    "emailCliente" TEXT NOT NULL,
    "fechaDeReserva" TIMESTAMP(3) NOT NULL,
    "horaInicio" TEXT NOT NULL,
    "horaFin" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Reserva_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Telemetria" (
    "id" SERIAL NOT NULL,
    "espacioId" INTEGER NOT NULL,
    "co2" DOUBLE PRECISION,
    "humedad" DOUBLE PRECISION,
    "temp" DOUBLE PRECISION,
    "bateria" DOUBLE PRECISION,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Telemetria_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Espacio" ADD CONSTRAINT "Espacio_lugarId_fkey" FOREIGN KEY ("lugarId") REFERENCES "Lugar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_espacioId_fkey" FOREIGN KEY ("espacioId") REFERENCES "Espacio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
