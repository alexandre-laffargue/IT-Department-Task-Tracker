FROM node:20-bookworm-slim AS base
WORKDIR /app
COPY package*.json ./
RUN npm install # Installation des dépendances

FROM base AS dev
COPY . .
ENV NODE_ENV=development
EXPOSE 5173
CMD ["npm", "run", "dev"]

FROM base AS prod
COPY . .
ENV NODE_ENV=production
RUN npm run build
EXPOSE 4173
CMD ["npm", "run", "preview"]