FROM node:12.19.0-alpine3.9

WORKDIR /usr/src/app

EXPOSE 3001

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "index.js"]
