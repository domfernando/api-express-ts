# Stage 1: Build
FROM node:alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Run
FROM node:alpine
WORKDIR /app
COPY --from=build /app/ /app
COPY --from=build /app/package*.json ./
RUN npm install --production
EXPOSE 3333
CMD ["npm", "start"]
