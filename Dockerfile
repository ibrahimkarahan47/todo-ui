FROM node:14-alpine AS builder

WORKDIR /app

COPY package.json /app

RUN npm install --silence

COPY . /app

RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html