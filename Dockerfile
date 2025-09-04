FROM node:14-alpine
WORKDIR /usr/src/app
COPY ./package.json ./package-lock.json ./server.js /usr/src/app/
RUN npm install
COPY . /usr/src/app
EXPOSE 8080
ENV PORT=8080
HEALTHCHECK --interval=10s --timeout=2s --retries=3 CMD wget -qO- http://localhost:8080/health || exit 1
CMD ["npm","run","start:prod","--server.port=8080", "--server.address=0.0.0.0"]