FROM node

WORKDIR /dialzytest

COPY . .

RUN npm install

EXPOSE 5000

CMD ["node","server.js"]