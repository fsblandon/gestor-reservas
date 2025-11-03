# Gestor de Reservas

Proyecto full-stack con **Docker**, **PostgreSQL**, **Backend (Node.js + Prisma)** y **Frontend (Vite + React)**.  
Permite levantar **base de datos, backend y frontend** de forma completa con un solo comando.

---

## 🚀 Requisitos

- [Docker](https://www.docker.com/get-started) ≥ 20.x  
- [Docker Compose](https://docs.docker.com/compose/install/) ≥ 1.29.x  

> No necesitas Node.js o npm localmente para correr el proyecto.

---

## 📂 Estructura del proyecto
gestor-reservas/
├─ apps/
│ ├─ api/ # Backend Node.js + Prisma
│ └─ web/ # Frontend React + Vite
├─ docker-compose.yml
├─ README.md

## ⚡ Levantar el proyecto

1. Clona el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
cd gestor-reservas
```

2. Levanta todos los servicios (DB, backend, frontend):

```bash
docker compose up --build
```

3. Insertar datos básicos manuales desde docker:

```bash
docker compose exec db psql -U postgres -d reservas
```

```bash
INSERT INTO "Lugar" ("nombre", "ubicacion")
VALUES ('Oficina Central', 'Pereira');

INSERT INTO "Espacio" ("nombre", "capacidad", "descripcion", "lugarId")
VALUES ('Sala de reuniones A', 10, 'Espacio principal de reuniones', 1);
```

4. Accede al frontend desde tu navegador:

http://localhost:5173

## Base de datos

- PostgreSQL expuesto en 5432
- Usuario: postgres
- Contraseña: postgres
- Base de datos: reservas
- Persistencia: volumen Docker db-data

## Comandos útiles

- Reconstruir contenedores:

```bash
docker compose down -v
docker compose up --build
```

- Ver logs:

```bash
docker compose logs -f web
docker compose logs -f api
docker compose logs -f db
```

- Entrar a un contenedor:

```bash
docker compose exec web sh
docker compose exec api sh
```