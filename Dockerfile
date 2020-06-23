FROM node:alpine AS builder
WORKDIR /app
COPY . .
ARG configuration=production
RUN sudo npm install &&  sudo npm run build
FROM nginx:alpine
COPY --from=builder /app/dist/* /usr/share/nginx/html/