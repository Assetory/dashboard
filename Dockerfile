FROM node:latest

WORKDIR /app

COPY package.json .

RUN npm install --quiet

COPY . .

CMD ["npm", "start"]