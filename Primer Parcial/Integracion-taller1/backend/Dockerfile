FROM node

WORKDIR /app.js

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "start"]