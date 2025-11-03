FROM node:18-alpine

WORKDIR /app

# Copiar dependencias
COPY package*.json ./
RUN npm install

# Copiar el resto del código
COPY . .

# Generar cliente Prisma y compilar TS
RUN npx prisma generate
RUN npm run build

EXPOSE 3333

CMD ["node", "dist/server.js"]
