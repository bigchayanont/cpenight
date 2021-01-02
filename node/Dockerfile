FROM node:12 as base
RUN mkdir app
WORKDIR /app
COPY package-lock.json package-lock.json
COPY package.json package.json
RUN npm install

FROM base as dev
WORKDIR /app
COPY . .
CMD ["node", "server.js"]
EXPOSE 8080