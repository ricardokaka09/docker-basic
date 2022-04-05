FROM node:12-alpine

WORKDIR /usr/src/docker-basic

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start"]
